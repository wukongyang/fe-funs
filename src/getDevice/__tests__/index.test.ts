import getDevice, { DeviceType, PlatformType, RuntimeType } from './../index';

test('device-Android-微信', () => {
  Object.defineProperty(window, 'navigator', {
    writable: true,
    value: {
      userAgent:
        'Mozilla/5.0 (Linux; Android 12; NX709J Build/SKQ1.220502.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4343 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/6498 MicroMessenger/8.0.28.2240(0x28001C57) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
    },
  });
  expect(getDevice('device')).toEqual(DeviceType.mobile);
  expect(getDevice('platform')).toEqual(PlatformType.android);
  expect(getDevice('runtime')).toEqual(RuntimeType.wechat);
});

test('device-Android-知音楼', () => {
  Object.defineProperty(window, 'navigator', {
    writable: true,
    value: {
      userAgent:
        'Mozilla/5.0 (Linux; Android 12; NX709J Build/SKQ1.220502.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/99.0.4844.88 Mobile Safari/537.36 AgentWeb/ UCBrowser/11.6.4.950 Yachlang/zh-CN Yachprod Yach/1.6.9.5 YachAndroid Yachprod',
    },
  });
  expect(getDevice('device')).toEqual(DeviceType.mobile);
  expect(getDevice('platform')).toEqual(PlatformType.android);
  expect(getDevice('runtime')).toEqual(RuntimeType.yach);
});

test('device-Android-浏览器', () => {
  Object.defineProperty(window, 'navigator', {
    writable: true,
    value: {
      userAgent:
        'Mozilla/5.0 (Linux; Android 12; NX709J Build/SKQ1.220502.001) AppleWebKit/537.36(KHTML,like Gecko)Version/4.0 Chrome/99.0.4844.88 Mobile Safari/537.36',
    },
  });
  expect(getDevice('device')).toEqual(DeviceType.mobile);
  expect(getDevice('platform')).toEqual(PlatformType.android);
  expect(getDevice('runtime')).toEqual(RuntimeType.browser);
});

test('device-华为、荣耀-微信', () => {
  Object.defineProperty(window, 'navigator', {
    writable: true,
    value: {
      userAgent:
        'Mozilla/5.0 (Linux; Android 10; OXF-AN10 Build/HUAWEIOXF-AN10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4343 MMWEBSDK/20221011 Mobile Safari/537.36 MMWEBID/2292 MicroMessenger/8.0.30.2260(0x28001E51) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64',
    },
  });
  expect(getDevice('device')).toEqual(DeviceType.mobile);
  expect(getDevice('platform')).toEqual(PlatformType.huawei);
  expect(getDevice('runtime')).toEqual(RuntimeType.wechat);
});

test('device-mac-chrome', () => {
  Object.defineProperty(window, 'navigator', {
    writable: true,
    value: {
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    },
  });
  expect(getDevice('device')).toEqual(DeviceType.pc);
  expect(getDevice('platform')).toEqual(PlatformType.mac);
  expect(getDevice('runtime')).toEqual(RuntimeType.browser);
});

test('device-mac-safari', () => {
  Object.defineProperty(window, 'navigator', {
    writable: true,
    value: {
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.3 Safari/605.1.15',
    },
  });
  expect(getDevice('device')).toEqual(DeviceType.pc);
  expect(getDevice('platform')).toEqual(PlatformType.mac);
  expect(getDevice('runtime')).toEqual(RuntimeType.browser);
});

test('device-windows-edge', () => {
  Object.defineProperty(window, 'navigator', {
    writable: true,
    value: {
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.56',
    },
  });
  expect(getDevice('device')).toEqual(DeviceType.pc);
  expect(getDevice('platform')).toEqual(PlatformType.windows);
  expect(getDevice('runtime')).toEqual(RuntimeType.browser);
});
