import React from 'react';
import uniWeb from '..';

export default () => {
  return (
    <>
      <button
        type="button"
        onClick={() => uniWeb.goOfficalAccount()}
        style={{ margin: 20 }}
      >
        跳转关注公众号
      </button>
      <button
        type="button"
        onClick={() => uniWeb.goMiniProgram('gh_dsa12dsds', '/')}
        style={{ margin: 20 }}
      >
        跳转小程序
      </button>
      <button
        type="button"
        onClick={() =>
          uniWeb.wechatShareImgToFriend('https://dsds.com/1212.png')
        }
        style={{ margin: 20 }}
      >
        分享图片给微信好友
      </button>
      <button
        type="button"
        onClick={() =>
          uniWeb.wechatShareImgToMonments('https://dsds.com/1212.png')
        }
        style={{ margin: 20 }}
      >
        分享图片给微信朋友圈
      </button>
      <button
        type="button"
        onClick={() =>
          uniWeb.wechatShareToFriend(
            '熊猫博士',
            '欢迎',
            'https://xiongmaoboshi.com',
            'https://dsds.com/1212.png',
          )
        }
        style={{ margin: 20 }}
      >
        分享url到微信好友
      </button>
      <button
        type="button"
        onClick={() =>
          uniWeb.weChatShareToMoments(
            '熊猫博士',
            '欢迎',
            'https://xiongmaoboshi.com',
            'https://dsds.com/1212.png',
          )
        }
        style={{ margin: 20 }}
      >
        分享url到朋友圈
      </button>
      <button
        type="button"
        onClick={() => uniWeb.goHome()}
        style={{ margin: 20 }}
      >
        App内H5返回首页
      </button>
      <button
        type="button"
        onClick={() => uniWeb.goGameStore()}
        style={{ margin: 20 }}
      >
        跳转应用内商店
      </button>
      <button
        type="button"
        onClick={() => uniWeb.hideToolBar()}
        style={{ margin: 20 }}
      >
        隐藏toolbar
      </button>
      <button
        type="button"
        onClick={() => uniWeb.showToolBar()}
        style={{ margin: 20 }}
      >
        打开toolbar
      </button>
      <button
        type="button"
        onClick={() => uniWeb.setPortal()}
        style={{ margin: 20 }}
      >
        当前webview屏幕方向为竖屏
      </button>
      <button
        type="button"
        onClick={() => uniWeb.setLandscape()}
        style={{ margin: 20 }}
      >
        当前webview屏幕方向为横屏
      </button>
      <button
        type="button"
        onClick={() => uniWeb.deleteAccount()}
        style={{ margin: 20 }}
      >
        通知客户端删除账户
      </button>
      <button
        type="button"
        onClick={() => uniWeb.notifyAppH5Login('Bear', 'Bear ')}
        style={{ margin: 20 }}
      >
        通知app H5登录完成
      </button>
      <button
        type="button"
        onClick={() => uniWeb.goFeedToto()}
        style={{ margin: 20 }}
      >
        CA跳转到喂食toto
      </button>
    </>
  );
};
