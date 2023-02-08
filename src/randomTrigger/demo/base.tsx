import React, { useState } from 'react';
import { randomTrigger } from 'tools';

const App: React.FC = () => {
  const [time, setTime] = useState<number>();

  const onTrigger = () => {
    const now = new Date().getTime();
    randomTrigger(1, 5, () => {
      setTime(new Date().getTime() - now);
    });
  };

  return (
    <>
      <button onClick={onTrigger} type="button">
        触发方法
      </button>
      {!!time && <p>随机触发间隔时间：{(time / 1000).toFixed(2)}毫秒</p>}
    </>
  );
};

export default App;
