/* tslint:disable */
/* istanbul ignore next */
const pigpio = process.env.NODE_ENV === 'development' ?
	require('pigpio-mock') :
	require('pigpio');
/* tslint:enable */
const Gpio = pigpio.Gpio;

import { CONFIG } from '../../conf/config';
import { Interval } from '../interval';
import { logger } from '../logger';
import { LightsStatus } from './interfaces';
import status from './status';

export class Lights {
	public static shutdown(): void {
		logger.info('Shutting the lights down, cleanup running');

		try {
			pigpio.terminate();
		}
		catch (e) {
			// fails on dev, since `pigpio`'s prototype doesn't contain `terminate()`
			logger.warn(e);
		}

		process.exit(0);
	}

	private intervals: { red?: Interval, green?: Interval, blue?: Interval } = {};
	private options;

	constructor() {
		this.options = {
			fadeInterval: CONFIG.fadeInterval,
			leds: {
				red: new Gpio(CONFIG.pins.red, { mode: Gpio.OUTPUT }),
				green: new Gpio(CONFIG.pins.green, { mode: Gpio.OUTPUT }),
				blue: new Gpio(CONFIG.pins.blue, { mode: Gpio.OUTPUT }),
			},
		};
	}

	public setState(state: LightsStatus): void {
		this.setLights(state);
	}

	private setLights(state: LightsStatus): void {
		status.set(`${state}`);
		this.fade(state);
	}

	private fade(state: LightsStatus): void {
		this.stopAll();

		Object.keys(this.options.leds)
			.forEach((led) => {
				const ledInstance = this.options.leds[led];
				this.intervals[led] = new Interval(
					() => {
						const newValue = state[led];
						const currValue = ledInstance.getPwmDutyCycle();

						if (currValue < newValue) {
							ledInstance.pwmWrite(currValue + 1);
						}
						else if (currValue > newValue) {
							ledInstance.pwmWrite(currValue - 1);
						}
						else {
							this.stop(led);
						}
					},
					this.options.fadeInterval,
				);
				this.intervals[led].start();
			});
	}

	private stopAll(): void {
		Object.keys(this.intervals).forEach(this.stop);
	}

	private stop(led): void {
		if (this.intervals[led] instanceof Interval) {
			this.intervals[led].stop();
		}
	}
}

process.on('SIGHUP', Lights.shutdown);
process.on('SIGINT', Lights.shutdown);
process.on('SIGCONT', Lights.shutdown);
process.on('SIGTERM', Lights.shutdown);
