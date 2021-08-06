/* tslint:disable:no-unused-variable */

import { waitForAsync } from '@angular/core/testing';
import { Utils } from './utils';

describe('Utils', () => {
    beforeEach(waitForAsync(() => {
    }))

    it('should getRandomInt', waitForAsync(() => {
        const minNumber = 0;
        const maxNumber = 20;
        const ramdomNumber = Utils.getRandomInt(0, 5);
        expect(ramdomNumber).toBeLessThanOrEqual(maxNumber);
        expect(ramdomNumber).toBeGreaterThanOrEqual(minNumber);
        expect(typeof ramdomNumber).toBe('number');
    }));
});
