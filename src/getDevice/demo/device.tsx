import React, { useState } from 'react';
import { DeviceInfoType, DeviceType, getDevice } from 'fe-funs';

const App: React.FC = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>();

  const onGetDevice = () => {
    const device = getDevice(DeviceInfoType.device);
    setDeviceType(device);
  };

  return (
    <>
      <button onClick={onGetDevice} type="button">
        点击获取设备类型
      </button>
      {!!deviceType && <p>当前设备类型是：{deviceType}</p>}
    </>
  );
};

export default App;
