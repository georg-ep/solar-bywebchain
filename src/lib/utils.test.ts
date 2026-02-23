import { jest, describe, it, expect } from '@jest/globals';
import * as utils from './utils';

describe('utils', () => {
  it('cx should merge class names correctly', () => {
    const result = utils.cx('class1', 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('cx should handle falsy values correctly', () => {
    const result = utils.cx('class1', false, 'class2', undefined, 'class3', null);
    expect(result).toBe('class1 class2 class3');
  });

  it('focusInput should return an array of strings', () => {
    expect(Array.isArray(utils.focusInput)).toBe(true);
    utils.focusInput.forEach(item => {
      expect(typeof item).toBe('string');
    });
  });

  it('focusRing should return an array of strings', () => {
    expect(Array.isArray(utils.focusRing)).toBe(true);
    utils.focusRing.forEach(item => {
      expect(typeof item).toBe('string');
    });
  });

  it('hasErrorInput should return an array of strings', () => {
    expect(Array.isArray(utils.hasErrorInput)).toBe(true);
    utils.hasErrorInput.forEach(item => {
      expect(typeof item).toBe('string');
    });
  });
});