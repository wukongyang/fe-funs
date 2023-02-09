import React, { useEffect, useState } from 'react';
import { Time } from 'fe-funs';

const App: React.FC = () => {
  const [day, setDay] = useState<string>();
  const [hour, setHour] = useState<string>();
  const [minutes, setMinutes] = useState<string>();
  const [second, setSecond] = useState<string>();

  useEffect(() => {
    const timestamp = 86300000;
    const timeInfo = Time.getTime(timestamp);
    setDay(timeInfo.day);
    setHour(timeInfo.hour);
    setMinutes(timeInfo.minutes);
    setSecond(timeInfo.second);
  }, []);

  return (
    <>
      {day}天{hour}小时{minutes}分钟{second}秒
    </>
  );
};

export default App;
