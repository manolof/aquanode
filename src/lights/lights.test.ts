import * as pigpio from 'pigpio';
const Gpio = pigpio.Gpio;

import { CONFIG } from '../../conf/config';
import { Interval } from '../interval';
import { logger } from '../logger';
import { LightsStatus } from './interfaces';
import { Lights } from './lights';
import status from './status';

jest.useFakeTimers();

jest.mock('../../conf/config', () => ({
	CONFIG: {
		pins: {
			white: 1,
			red: 2,
			green: 3,
			blue: 4,
			relay: 5,
		},
		fadeDuration: 500,
		logFile: 'log.log',
		rgbSpectrum: {
			red: [1, 2, 3],
			green: [1, 2, 3],
			blue: [1, 2, 3],
		},
	},
}));
jest.mock('../logger');
jest.mock('./status');

describe('Lights', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	afterEach(() => {
		jest.clearAllTimers();
	});

	describe('setState', () => {
		const intervalStart = jest.spyOn(Interval.prototype, 'start');
		const intervalStop = jest.spyOn(Interval.prototype, 'stop');
		const gpioPwmWrite = jest.spyOn(Gpio.prototype, 'pwmWrite');
		const loggerError = jest.spyOn(logger, 'error');
		const statusSet = jest.spyOn(status, 'set');

		it(`should set the light's state to day`, () => {
			Lights.setState(LightsStatus.day);

			expect(statusSet).toHaveBeenCalledWith(LightsStatus.day);

			expect(intervalStop).not.toHaveBeenCalled();
			expect(gpioPwmWrite).not.toHaveBeenCalled();
			expect(intervalStart).toHaveBeenCalled();

			jest.advanceTimersByTime(CONFIG.fadeDuration);
			expect(gpioPwmWrite.mock.calls[0][0]).toBeLessThanOrEqual(1);

			// Should call stop again once it reaches zero
			jest.advanceTimersByTime(CONFIG.fadeDuration);
			expect(intervalStop).toHaveBeenCalledTimes(1);
		});

		it(`should set the light's state to night`, () => {
			Lights.setState(LightsStatus.night);

			expect(statusSet).toHaveBeenCalledWith(LightsStatus.night);

			expect(intervalStop).toHaveBeenCalledTimes(1);
			expect(gpioPwmWrite).not.toHaveBeenCalled();
			expect(intervalStart).toHaveBeenCalled();

			jest.advanceTimersByTime(CONFIG.fadeDuration);
			expect(gpioPwmWrite.mock.calls[0][0]).toBeGreaterThanOrEqual(250);

			// Should call stop again once it reaches zero
			jest.advanceTimersByTime(CONFIG.fadeDuration);
			expect(intervalStop).toHaveBeenCalledTimes(2);
		});

		it(`should set the light's state to off`, () => {
			Lights.setState(LightsStatus.off);

			expect(statusSet).toHaveBeenCalledWith(LightsStatus.off);

			expect(intervalStop).toHaveBeenCalledTimes(1);
			expect(intervalStart).not.toHaveBeenCalled();

			expect(gpioPwmWrite.mock.calls[0][0]).toBe(0);
		});

		it(`should log an error if it's called with the incorrect light state`, () => {
			Lights.setState('test' as any);

			expect(statusSet).not.toHaveBeenCalled();
			expect(intervalStop).not.toHaveBeenCalled();
			expect(gpioPwmWrite).not.toHaveBeenCalled();
			expect(intervalStart).not.toHaveBeenCalled();

			expect(loggerError).toHaveBeenCalled();
		});
	});

	describe('shutdown', () => {
		const loggerInfo = jest.spyOn(logger, 'info');
		const loggerWarn = jest.spyOn(logger, 'warn');
		const processExit = jest.spyOn(process, 'exit').mockImplementation((_number) => _number);

		it(`should attempt to gracefully shutdown the lights`, () => {
			Lights.shutdown();

			expect(loggerInfo).toHaveBeenCalled();
			expect(loggerWarn).toHaveBeenCalled();
			expect(processExit).toHaveBeenCalled();
		});
	});

});
