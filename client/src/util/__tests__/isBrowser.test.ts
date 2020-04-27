import isBrowser from '../isBrowser';

describe('isBrowser', () => {
  it('should return true in jest', () => {
    expect(isBrowser()).toEqual(true);
  });
});
