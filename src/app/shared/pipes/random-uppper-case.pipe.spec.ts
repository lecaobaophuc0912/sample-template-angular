/* tslint:disable:no-unused-variable */

import { waitForAsync } from '@angular/core/testing';
import { RandomUppperCasePipe } from './random-uppper-case.pipe';

describe('Pipe: RandomUppperCasee', () => {
  let randomUpperCasePipe: RandomUppperCasePipe;
  beforeEach(waitForAsync(() => {
    randomUpperCasePipe = new RandomUppperCasePipe();
  }))

  it('create an instance', waitForAsync(() => {
    expect(randomUpperCasePipe).toBeTruthy();
  }));

  it('should get arrUpperIndex less than length value', waitForAsync(() => {
    expect(randomUpperCasePipe.transform('abcEXtA', [1, 3, 5])).toBe('aBcEXTA');
  }));

  it('should get arrUpperIndex more than length value', waitForAsync(() => {
    expect(randomUpperCasePipe.transform('abcEXtA', [1, 2, 3, 4, 5, 6, 7, 8])).toBe('aBCEXTA');
  }));

  it('should get arrUpperIndex have value more than length value', waitForAsync(() => {
    expect(randomUpperCasePipe.transform('abcEXtA', [1, 2, 3, 9])).toBe('aBCEXtA');
  }));

  it('should get arrUpperIndex is Empty Array', waitForAsync(() => {
    expect(randomUpperCasePipe.transform('abcEXtA')).toBe('abcEXtA');
  }));

});
