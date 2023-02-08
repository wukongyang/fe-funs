type StoreType = 'HubButton' | 'Pinyin_Jump';

export enum CAOpenPlatfrom {
  IOS = 'ios',
  ANDROID = 'android',
  HUAWEI = 'huawei',
  XIAOMI = 'xiaomi',
  OPPO = 'oppo',
}

export interface IUniWeb {
  /** 跳转关注公众号 */
  goOfficalAccount: () => void;
  /** 跳转小程序 */
  goMiniProgram: (id: string, path: string) => void;
  /** 分享图片给微信好友 */
  wechatShareImgToFriend: (imgUrl: string) => void;
  /** 分享图片给微信朋友圈 */
  wechatShareImgToMonments: (imgUrl: string) => void;
  /** 分享url到微信好友 */
  wechatShareToFriend: (
    title: string,
    description: string,
    url: string,
    image: string,
  ) => void;
  /** 分享url到朋友圈 */
  weChatShareToMoments: (
    title: string,
    description: string,
    url: string,
    image: string,
  ) => void;
  /** App内H5返回首页 */
  goHome: () => void;
  /** 跳转应用内商店 accesspoint=HubButton 跳CA识字 accesspoint=Pinyin_Jump 跳CA拼音 **/
  goGameStore: (accesspoint?: StoreType) => void;
  /** 隐藏toolbar */
  hideToolBar: () => void;
  /** 打开toolbar */
  showToolBar: () => void;
  /** 当前webview屏幕方向为竖屏 */
  setPortal: () => void;
  /** 当前webview屏幕方向为横屏 */
  setLandscape: () => void;
  /** 通知客户端删除账户 */
  deleteAccount: () => void;
  /** 通知app H5登录完成 */
  notifyAppH5Login: (dptoken: string, taltoken: string) => void;
  /** CA跳转到喂食toto */
  goFeedToto: () => void;
}

const UniWeb: IUniWeb = {
  wechatShareImgToFriend: (imgUrl: string) => {
    location.href = `uniwebview://wechatsharetofriend?image=${imgUrl}`;
  },
  wechatShareImgToMonments: (imgUrl: string) => {
    location.href = `uniwebview://WeChatShareToMoments?image=${imgUrl}`;
  },
  wechatShareToFriend: (
    title: string,
    description: string,
    url: string,
    imgUrl: string,
  ) => {
    location.href = `uniwebview://WeChatShareUrlToFriend?title=${title}&description=${description}&url=${encodeURIComponent(
      url,
    )}&urlImage=${encodeURIComponent(imgUrl)}`;
  },
  weChatShareToMoments: (
    title: string,
    description: string,
    url: string,
    imgUrl: string,
  ) => {
    location.href = `uniwebview://WeChatShareUrlToMoments?title=${title}&description=${description}&url=${encodeURIComponent(
      url,
    )}&urlImage=${encodeURIComponent(imgUrl)}`;
  },
  goHome: () => {
    location.href = 'uniwebview://home';
  },
  goFeedToto: () => {
    location.href = 'uniwebview://feedToto';
  },
  goGameStore: (accesspoint?: StoreType) => {
    const paramsStr = accesspoint ? `?accesspoint=${accesspoint}` : '';
    location.href = `uniwebview://jumpto_gamestore${paramsStr}`;
  },
  notifyAppH5Login: (dptoken: string, taltoken: string) => {
    const params = `${dptoken ? `?dptoken=${dptoken}` : ''}${
      taltoken ? `&taltoken=${taltoken}` : ''
    }`;
    location.href = `uniwebview://weblogin${params}`;
  },
  hideToolBar: () => {
    location.href = 'uniwebview://hideToolbar';
  },
  showToolBar: () => {
    location.href = 'uniwebview://showToolbar';
  },
  setPortal: () => {
    location.href = 'uniwebview://ScreenOrientation?type=Portal';
  },
  setLandscape: () => {
    location.href = 'uniwebview://ScreenOrientation?type=Landscape';
  },
  goMiniProgram: (id: string, path: string) => {
    location.href = `uniwebview://WeChatMiniProgram?id=${id}&path=${path}`;
  },
  deleteAccount: () => {
    location.href = 'uniwebview://AccountDeleted';
  },
  goOfficalAccount: () => {
    location.href = 'uniwebview://LearningSubscription';
  },
};

export default UniWeb;
