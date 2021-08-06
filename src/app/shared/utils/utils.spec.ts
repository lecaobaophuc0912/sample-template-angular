/* tslint:disable:no-unused-variable */

import { waitForAsync } from '@angular/core/testing';
import { getRandomInt } from './utils';

describe('Utils', () => {
    beforeEach(waitForAsync(() => {
    }))

    it('should getRandomInt', waitForAsync(() => {
        const minNumber = 0;
        const maxNumber = 20;
        const ramdomNumber = getRandomInt(0, 5);
        expect(ramdomNumber).toBeLessThanOrEqual(maxNumber);
        expect(ramdomNumber).toBeGreaterThanOrEqual(minNumber);
        expect(typeof ramdomNumber).toBe('number');
    }));
});
