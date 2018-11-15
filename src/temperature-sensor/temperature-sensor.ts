import * as sensor from 'ds18b20';

import { CONFIG } from '../../conf/config';
import { temperatureLogCollection } from '../../conf/firebase';
import { Interval } from '../interval';
import { logger } from '../logger';

export class TemperatureSensor {
	public static init() {
		const temperature = new TemperatureSensor();

		temperature.getTemperature();
	}

	private static instance: TemperatureSensor;
	private options;

	constructor() {
		this.options = {
			temperatureSensorInterval: CONFIG.temperatureSensorInterval,
		};

		if (!TemperatureSensor.instance) {
			TemperatureSensor.instance = this;
		}

		return TemperatureSensor.instance;
	}

	private getTemperature() {
		sensor.sensors((err, ids) => {
			if (err) {
				logger.error(`Can not get sensor IDs: ${err}`);
				return;
			}

			if (ids.length === 0) {
				logger.error(`No sensors found`);
				return;
			}

			if (ids.length > 1) {
				logger.error(`Multiple 1-Wire sensors found; you should only connect one`);
				return;
			}

			const [temperatureSensorId] = ids;

			logger.info(`Sensor ID: ${temperatureSensorId}`);

			new Interval(
				() => {
					logger.info(`Sensor ${temperatureSensorId} (decimal): ${sensor.temperatureSync(temperatureSensorId)}`);
					this.recordTemperature(sensor.temperatureSync(temperatureSensorId));
				},
				this.options.temperatureSensorInterval,
			)
				.start();

		});
	}

	private recordTemperature(temperature: number) {
		logger.info(`${temperature}`);
		temperatureLogCollection.add({
			temperature,
			date: new Date(),
		});
	}
}
