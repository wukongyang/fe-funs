/* eslint-disable no-delete-var */
import uniWeb from '../index';

test('测试H5与unity交互', () => {
  Object.defineProperty(window, 'location', {
    value: jest.fn(),
    configurable: true,
  });
  expect(uniWeb.goOfficalAccount()).toBeUndefined();
  expect(uniWeb.goMiniProgram('gh_dsa12dsds', '/')).toBeUndefined();
  expect(
    uniWeb.wechatShareImgToFriend('https://dsds.com/1212.png'),
  ).toBeUndefined();
  expect(
    uniWeb.wechatShareImgToMonments('https://dsds.com/1212.png'),
  ).toBeUndefined();
  expect(
    uniWeb.wechatShareToFriend(
      '熊猫博士',
      '欢迎',
      'https://xiongmaoboshi.com',
      'https://dsds.com/1212.png',
    ),
  ).toBeUndefined();
  expect(
    uniWeb.weChatShareToMoments(
      '熊猫博士',
      '欢迎',
      'https://xiongmaoboshi.com',
      'https://dsds.com/1212.png',
    ),
  ).toBeUndefined();
  expect(uniWeb.goHome()).toBeUndefined();
  expect(uniWeb.goGameStore()).toBeUndefined();
  expect(uniWeb.goGameStore('HubButton')).toBeUndefined();
  expect(uniWeb.goGameStore('Pinyin_Jump')).toBeUndefined();
  expect(uniWeb.hideToolBar()).toBeUndefined();
  expect(uniWeb.showToolBar()).toBeUndefined();
  expect(uniWeb.setPortal()).toBeUndefined();
  expect(uniWeb.setLandscape()).toBeUndefined();
  expect(uniWeb.deleteAccount()).toBeUndefined();
  expect(uniWeb.notifyAppH5Login('Bear', 'Bear ')).toBeUndefined();
  expect(uniWeb.notifyAppH5Login('', '')).toBeUndefined();
  expect(uniWeb.goFeedToto()).toBeUndefined();
});
