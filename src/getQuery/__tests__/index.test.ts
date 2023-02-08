import getQuery from '../index';

test('测试getQuery函数', () => {
  expect(getQuery('http://test.com?test_key=test_value')).toStrictEqual({
    test_key: 'test_value',
  });
  expect(getQuery('')).toStrictEqual({});
  expect(getQuery()).toStrictEqual({});
  expect(getQuery('http://test.com?test_key=test_value', 'test_key')).toBe(
    'test_value',
  );
});
