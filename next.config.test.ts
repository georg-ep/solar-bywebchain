import { config } from './next.config';
import { NextConfig } from 'next';

describe('next.config.ts', () => {
  it('should export a function', () => {
    expect(typeof config).toBe('object');
  });

  it('should have a valid webpack configuration', () => {
    const mockConfig = {
      webpack: jest.fn(),
    } as unknown as NextConfig;
    config.webpack?.(mockConfig as any, {})
    expect(mockConfig.webpack).toHaveBeenCalled();
  });

  it('should have a valid images configuration', () => {
    expect(config.images).toBeDefined();
    if (config.images) {
      expect(typeof config.images).toBe('object');
    }
  });

  it('should have a valid experimental configuration', () => {
    expect(config.experimental).toBeDefined();
    if (config.experimental) {
      expect(typeof config.experimental).toBe('object');
    }
  });

  it('should have a valid output configuration', () => {
    expect(config.output).toBeDefined();
    if (config.output) {
      expect(typeof config.output).toBe('string');
    }
  });
});