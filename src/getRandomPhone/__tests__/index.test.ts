import getRandomPhone from '../index';

test('getRandomPhone - length', () => {
  expect(getRandomPhone().length).toBe(11);
});

test('getRandomPhone - ****', () => {
  expect(getRandomPhone().includes('****')).toBe(true);
});
