import shallow from '../index';

test('测试对象浅比较', async () => {
  const testObj1 = { a: 1, b: 2 };
  const testObj2 = { a: 1 };
  const testObj3 = { a: 1, b: 2 };
  const testObj4 = { a: 1, c: 2 };
  const compare1 = shallow(testObj1, testObj1);
  const compare2 = shallow(testObj1, testObj2);
  const compare3 = shallow(testObj1, testObj3);
  const compare4 = shallow(testObj1, testObj4);
  expect(compare1).toBeTruthy();
  expect(compare2).toBeFalsy();
  expect(compare3).toBeTruthy();
  expect(compare4).toBeFalsy();
});
