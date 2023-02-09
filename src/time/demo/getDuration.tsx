import React, { useEffect, useState } from 'react';
import { Time } from 'fe-funs';

const App: React.FC = () => {
  const [duration, setDurationT] = useState<string>();
  const [durationDate, setDurationDate] = useState<string>();

  useEffect(() => {
    // 根据已知时长时间戳获取
    const timestamp = 86300000;
    const duration: string = Time.getDuration(timestamp, 'mm分钟ss秒');
    setDurationT(duration);

    // 根据两个目标日期获取格式化时长
    const dateT = '2023-01-16 14:36:26';
    const dateK = '2023-01-15 12:36:26';
    const durationT: string = Time.getDuration(
      dateK,
      dateT,
      'DD天hh小时mm分钟ss秒'
    );
    setDurationDate(durationT);

  }, []);

  return (
    <>
      86300000毫秒时长是:{duration}
      <br></br>
      2023-01-15 12:36:26和2023-01-16 14:36:26相距时长:{durationDate}
      <br></br>
    </>
  );
};

export default App;
