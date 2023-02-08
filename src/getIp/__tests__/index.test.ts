import getIp from '../index';

const mockXHR = {
  open: jest.fn(),
  send: jest.fn(),
  onreadystatechange: () => jest.fn(),
  readyState: 4,
  status: 200,
  responseText: JSON.stringify({ ip: '121.12.12.121' }),
  onerror: (error: any) => jest.fn(() => console.warn('jest fn', error)),
};

describe('测试获取客户端ip', function () {
  beforeEach(() => {
    Object.defineProperty(window, 'XMLHttpRequest', {
      value: jest.fn(() => mockXHR),
    });
  });

  test('模拟当前ip为121.12.12.121', function (done) {
    const reqPromise = getIp();
    mockXHR.onreadystatechange();
    reqPromise.then((ip) => {
      expect(ip).toBe('121.12.12.121');
      done();
    });
  });

  test('模拟获取当前ip报错', function (done) {
    const reqPromise = getIp();
    mockXHR.onerror('test error');
    reqPromise.catch((err) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(err).toBe('test error');
      done();
    });
  });

  test('模拟当前ip获取错误', function (done) {
    mockXHR.responseText = JSON.stringify({ data: '11' });
    const reqPromise = getIp();
    mockXHR.onreadystatechange();
    reqPromise.catch((err) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(err).toBe('get ip error');
      done();
    });
  });
});
