import getUuid from '../index';

test('getUuid - length', () => {
  expect(getUuid().length).toBe(32);
});
