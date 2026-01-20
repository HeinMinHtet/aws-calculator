import { calculatePrice } from './pricing';

describe('calculatePrice', () => {
  it('should return the correct price for a given set of inputs', () => {
    const price = calculatePrice('us-east-1', 't2.micro', 'linux', 24);
    expect(price).toBeCloseTo(0.0116 * 24 * 30);
  });

  it('should return 0 for unknown inputs', () => {
    const price = calculatePrice('unknown-region', 'unknown-instance', 'unknown-os', 24);
    expect(price).toBe(0);
  });
});
