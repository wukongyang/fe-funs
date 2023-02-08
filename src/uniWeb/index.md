---
category: Components
title: h5与unity交互方法
toc: content
group:
  title: 移动端
  order: 1
---

# h5 与 unity 交互方法

- 当某个内嵌在 app 的 H5 页面需要与 app 通信时调用。

## 示例

<!-- prettier-ignore -->
<code src="./demo/index.tsx"></code>

## API

| 方法                                                         | 说明                        | 参数类型                                                       | 参数说明                                                                                   |
| ------------------------------------------------------------ | --------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `uniweb.goOfficalAccount()`                                  | 前往关注公众号              | -                                                              | -                                                                                          |
| `uniweb.openMiniProgram(id, path)`                           | 跳转指定小程序页面          | id： string, path: string                                      | id:小程序原始 id path: 小程序页面路径                                                      |
| `uniWeb.wechatShareImgToFriend(imgUrl)`                      | 分享图片给微信好友          | imgUrl: string                                                 | imgUrl: 分享图片的链接                                                                     |
| `uniWeb.wechatShareImgToMonments(imgUrl)`                    | 分享图片给微信朋友圈        | imgUrl: string                                                 | imgUrl: 分享图片的链接                                                                     |
| `uniWeb.wechatShareImgToFriend(title,description,url,image)` | 分享 url 到微信好友         | title: string, description: string, url: string, image: string | 见[微信 sdk](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#111) |
| `uniWeb.wechatShareImgToFriend(title,description,url,image)` | 分享 url 到朋友圈           | title: string, description: string, url: string, image: string | 见[微信 sdk](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#111) |
| `uniWeb.goHome()`                                            | h5 返回 App 内              | -                                                              | -                                                                                          |
| `uniWeb.goGameStore(accesspoint?)`                           | 跳转应用内商店              | accesspoint: 'HubButton'/'Pinyin_Jump'                         | HubButton： CA 内跳转识字商店 Pinyin_Jump:CA 内跳转拼音商品                                |
| `uniWeb.hideToolBar()`                                       | 隐藏 toolbar                | -                                                              | -                                                                                          |
| `uniWeb.showToolBar()`                                       | 打开 toolbar                | -                                                              | -                                                                                          |
| `uniWeb.setPortal()`                                         | 当前 webview 屏幕方向为竖屏 | -                                                              | -                                                                                          |
| `uniWeb.setLandscape()`                                      | 当前 webview 屏幕方向为横屏 | -                                                              | -                                                                                          |
| `uniWeb.deleteAccount()`                                     | 通知客户端删除账户          | -                                                              | -                                                                                          |
| `uniWeb.notifyAppH5Login(dptoken，taltoken)`                 | 通知 app H5 登录完成        | dptoken: string, taltoken: string                              | dptoken: 熊猫博士账号 token, taltoken: tal 的 token                                        |
| -                                                            |
| `uniWeb.goFeedToto()`                                        | CA 跳转到喂食 toto          | -                                                              | -                                                                                          |
