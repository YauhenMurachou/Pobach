import { calculatePagesCount } from 'src/utils/users';

describe('calculatePagesCount', () => {
  test('pass 82 and 25, return 4', () => {
    expect(calculatePagesCount(82, 25)).toBe(4);
  });
  test('pass 1 and 1, return 1', () => {
    expect(calculatePagesCount(1, 1)).toBe(1);
  });
});
