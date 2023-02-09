import React, { useState } from 'react';
import { DeviceInfoType, getDevice, RuntimeType } from 'fe-funs';

const App: React.FC = () => {
  const [runtimeType, setRuntimeType] = useState<RuntimeType>();

  const onGetRuntime = () => {
    const runtime = getDevice(DeviceInfoType.runtime);
    console.log(runtime);
    setRuntimeType(runtime);
  };

  return (
    <>
      <button onClick={onGetRuntime} type="button">
        点击获取运行环境
      </button>
      {!!runtimeType && <p>当前运行环境是：{runtimeType}</p>}
    </>
  );
};

export default App;
