import Regular from '../index';

test('测试testCn函数', () => {
  expect(Regular.testCn('你好')).toBe(true);
  expect(Regular.testCn('nihao')).toBe(false);
  expect(Regular.testCn('你好！！')).toBe(false);
});
test('测试testEn函数', () => {
  expect(Regular.testEn('你好')).toBe(false);
  expect(Regular.testEn('hello')).toBe(true);
  expect(Regular.testEn('hello！！')).toBe(false);
});
test('测试testSpe函数', () => {
  expect(Regular.testSpe('你好')).toBe(false);
  expect(Regular.testSpe('hello')).toBe(false);
  expect(Regular.testSpe('hello?')).toBe(true);
  expect(Regular.testSpe('你好！！')).toBe(true);
});
test('测试testEmail函数', () => {
  expect(Regular.testEmail('ts@qq.com')).toBe(true);
  expect(Regular.testEmail('ts@163.com')).toBe(true);
  expect(Regular.testEmail('@hello.com')).toBe(false);
  expect(Regular.testEmail('hello')).toBe(false);
});
test('测试testIdCard函数', () => {
  expect(Regular.testIdCard('110101190001011009')).toBe(true);
  expect(Regular.testIdCard('11010119000101100')).toBe(false);
  expect(Regular.testIdCard('11010119000101100X')).toBe(true);
  expect(Regular.testIdCard('110101190001011009', false)).toBe(true);
  expect(Regular.testIdCard('10010119000101100', false)).toBe(false);
  expect(Regular.testIdCard('11010119000101100X', false)).toBe(false);
});
test('测试testMobile函数', () => {
  expect(Regular.testMobile('你好')).toBe(false);
  expect(Regular.testMobile('.,,.;..')).toBe(false);
  expect(Regular.testMobile('12345678901')).toBe(true);
  expect(Regular.testMobile('12345678901', false)).toBe(false);
});
test('测试testTelPhone函数', () => {
  expect(Regular.testTelPhone('你好')).toBe(false);
  expect(Regular.testTelPhone('.,,.;..')).toBe(false);
  expect(Regular.testTelPhone('7111111')).toBe(true);
  expect(Regular.testTelPhone('7111111', false)).toBe(false);
  expect(Regular.testTelPhone('0107111111', false)).toBe(false);
  expect(Regular.testTelPhone('12345678901', false)).toBe(false);
});
test('测试testUrl函数', () => {
  expect(Regular.testUrl('你好')).toBe(false);
  expect(Regular.testUrl('hello')).toBe(false);
  expect(Regular.testUrl('www.baidu.com')).toBe(true);
  expect(Regular.testUrl('http://xiongmao.com')).toBe(true);
  expect(Regular.testUrl('https://xiongmao.com')).toBe(true);
  expect(Regular.testUrl('https://xiongmao.com?query=test&key=value')).toBe(
    true,
  );
});
