import React from 'react';
import { StoreProvider, useModel } from './store';

function FunctionDemo() {
  /** 通过useModel取出user状态 */
  const { userInfo, setUserInfo } = useModel('user');

  /** 在点击事件中调用setUserInfo改变状态 */
  const onChangeUser = () => {
    setUserInfo({
      name: userInfo.name + '1',
    });
  };

  // 展示userInfo.name
  return (
    <button onClick={onChangeUser} type="button">
      {userInfo.name}--改变user中的状态
    </button>
  );
}

function App() {
  return (
    <StoreProvider>
      <FunctionDemo />
    </StoreProvider>
  );
}

export default App;
