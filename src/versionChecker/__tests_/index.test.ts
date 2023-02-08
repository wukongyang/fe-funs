/* eslint-disable @typescript-eslint/no-unused-vars */
import sleep from '../../sleep/index';
import VersionChecker from '../index';

const notify = jest.fn();

const mockXHR = {
  open: jest.fn(),
  send: jest.fn(),
  onreadystatechange: () => jest.fn(),
  readyState: 4,
  status: 200,
  responseText: `<!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="https://xiongmaoboshi.com/favicon.ico" type="image/x-icon">
                <title>熊猫博士后台系统</title><script src=/sf-webproxy/api/vpn-config></script><script src=/sf-webproxy/resource/web_proxy.js?v=1.4.3.103></script>
                <script type="module" crossorigin src="https://cd.xiongmaoboshi.com/cms/ola/assets/index.910b9325.js"></script>
                <link rel="modulepreload" crossorigin href="https://cd.xiongmaoboshi.com/cms/ola/assets/vendor.7100b6a0.js">
                <link rel="stylesheet" href="https://cd.xiongmaoboshi.com/cms/ola/assets/vendor.fdf80d66.css">
                <link rel="stylesheet" href="https://cd.xiongmaoboshi.com/cms/ola/assets/index.99211560.css">
                </head>
                <body>
                <div id="root"></div>
                </body>
                </html>`,
  onerror: (error: any) => jest.fn(() => console.warn('jest fn', error)),
};

describe('版本检查工具-versionChecker实例', () => {
  let versionCheckerIns: VersionChecker;

  const stopMockFn = jest.fn();
  const getVersionMockFn = jest.fn();

  beforeEach(() => {
    Object.defineProperty(window, 'XMLHttpRequest', {
      value: jest.fn(() => mockXHR),
    });

    versionCheckerIns = new VersionChecker({
      notify,
      refreshInterval: 1,
    });

    const originStop = versionCheckerIns.stop.bind(versionCheckerIns);
    const originGetVersion =
      versionCheckerIns.getVersion.bind(versionCheckerIns);
    versionCheckerIns.stop = (...args) => {
      stopMockFn();
      return originStop(...args);
    };

    versionCheckerIns.getVersion = (...args) => {
      getVersionMockFn();
      return originGetVersion(...args);
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('测试监听版本 实例不传递refreshInterval参数', async () => {
    let versionCheckerIns1: VersionChecker;
    versionCheckerIns1 = new VersionChecker({
      notify,
    });
    jest.spyOn(versionCheckerIns1, 'getVersion');
    Object.defineProperty(window, 'location', {
      value: new URL('https://cms-prod.xiongmaoboshi.com/ola#/'),
      configurable: true,
    });
    versionCheckerIns1.start();
    mockXHR.onreadystatechange();
    expect(versionCheckerIns1).toBeInstanceOf(VersionChecker);
    expect(versionCheckerIns1.getVersion).toHaveBeenCalledTimes(0);
  });

  test('测试监听版本 获取html文档失败', async () => {
    Object.defineProperty(window, 'location', {
      value: new URL('https://cms-prod.xiongmaoboshi.com/ola#/'),
    });
    versionCheckerIns.start();
    mockXHR.onerror('test error');
    expect(getVersionMockFn).toHaveBeenCalledTimes(0);
    expect(stopMockFn).toHaveBeenCalledTimes(0);
  });

  test('测试监听版本 获取到的html一致', async () => {
    Object.defineProperty(window, 'location', {
      value: new URL('https://cms-prod.xiongmaoboshi.com/ola#/'),
      configurable: true,
    });
    versionCheckerIns.start();
    mockXHR.onreadystatechange();
    await sleep(200);
    mockXHR.onreadystatechange();
    expect(stopMockFn).toHaveBeenCalledTimes(0);
  });

  test('测试监听版本 获取到的html改变', async () => {
    Object.defineProperty(window, 'location', {
      value: new URL('https://cms-prod.xiongmaoboshi.com/ola#/'),
      configurable: true,
    });
    versionCheckerIns.start();
    mockXHR.onreadystatechange();
    await sleep(200);
    mockXHR.responseText = '1212';
    mockXHR.onreadystatechange();
    await sleep(1000);
    expect(stopMockFn).toHaveBeenCalledTimes(1);
  });

  test('测试监听版本 在非发布环境执行', () => {
    delete global.window.location;
    Object.defineProperty(window, 'location', {
      value: new URL('localhost:8080'),
    });
    const getResourceMockFn = jest.fn();
    const origingetResource =
      versionCheckerIns.getResource.bind(versionCheckerIns);
    versionCheckerIns.getResource = (...args) => {
      getResourceMockFn();
      return origingetResource(...args);
    };
    versionCheckerIns.start();
    expect(getResourceMockFn).toHaveBeenCalledTimes(0);
  });
});
