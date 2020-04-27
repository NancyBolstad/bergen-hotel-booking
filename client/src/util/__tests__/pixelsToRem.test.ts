import pixelsToRem from '../pixelsToRem';

describe('pixelsToRem', () => {
  it('16px should be equal to 1 rem', () => {
    expect(pixelsToRem(16)).toBe(1);
  });
});
