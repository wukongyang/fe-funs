import React from 'react';
import { getModel } from './store';

const onChangeUser = () => {
  // 通过getModel读取user状态，进行操作
  const { userInfo, setUserInfo } = getModel('user');
  setUserInfo({
    name: userInfo.name + '1',
  });
};

// 1秒后执行onChangeUser方法
setTimeout(onChangeUser, 1000);

export default () => <></>;
