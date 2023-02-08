import getSTSToken from '../index';

const mockXHR = {
  open: jest.fn(),
  send: jest.fn(),
  onreadystatechange: () => jest.fn(),
  readyState: 4,
  status: 200,
  responseText: JSON.stringify({
    code: 0,
    data: {
      accessKeyId: '111',
      accessKeySecret: '222',
      securityToken: '333',
    },
  }),
  onerror: (error: any) => jest.fn(() => console.warn('jest fn', error)),
};

describe('测试获取客户端ip', function () {
  beforeEach(() => {
    Object.defineProperty(window, 'XMLHttpRequest', {
      value: jest.fn(() => mockXHR),
    });
  });
  test('模拟当前ip为特定token', function (done) {
    const reqPromise = getSTSToken();
    mockXHR.onreadystatechange();
    reqPromise.then((ip) => {
      expect(ip).toEqual({
        accessKeyId: '111',
        accessKeySecret: '222',
        securityToken: '333',
      });
      done();
    });
  });

  test('模拟获取ststoken报错', function (done) {
    const reqPromise = getSTSToken();
    mockXHR.onerror('test error');
    reqPromise.catch((err) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(err).toBe('test error');
      done();
    });
  });

  test('模拟ststoken获取错误', function (done) {
    mockXHR.responseText = JSON.stringify({
      code: 500,
      data: null,
      message: '1',
    });
    const reqPromise = getSTSToken();
    mockXHR.onreadystatechange();
    reqPromise.catch((err) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(err).toBe('get sts token error,1');
      done();
    });
  });
});
