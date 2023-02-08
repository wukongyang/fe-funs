import React, { useEffect, useState } from 'react';
import { Time } from 'tools';

const App: React.FC = () => {
  const [duration, setDuration] = useState<string>();

  useEffect(() => {
    // 获取目标日期与现在的时长
    const date = '2023-01-15 12:36:26';
    const burnNow: string = Time.getBurnNow(date, 'mm分钟ss秒');
    setDuration(burnNow);
  }, []);

  return <>2023-01-15 12:36:26距离现在:{duration}</>;
};

export default App;
