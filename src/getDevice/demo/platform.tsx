import React, { useState } from 'react';
import { DeviceInfoType, getDevice, PlatformType } from 'tools';

const App: React.FC = () => {
  const [platformType, setPlatformType] = useState<PlatformType>();

  const onGetPlatform = () => {
    const platform = getDevice(DeviceInfoType.platform);
    setPlatformType(platform);
  };

  return (
    <>
      <button onClick={onGetPlatform} type="button">
        点击获取设备品牌类型
      </button>
      {!!platformType && <p>当前设备品牌类型是：{platformType}</p>}
    </>
  );
};

export default App;
