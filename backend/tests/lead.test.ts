import { describe, it, expect } from 'vitest';

describe('Lead logic', () => {
  it('should format lead properly', () => {
    const name = 'Juan';
    const phone = '600000000';
    const formatted = `${name} - ${phone}`;
    expect(formatted).toBe('Juan - 600000000');
  });
});

