import React, { useEffect, useState } from 'react';
import { Time } from 'tools';

const App: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>();
  const [siteDate, setSiteDate] = useState<string>();

  useEffect(() => {
    // 获取当前时间
    const date: Date = new Date('2023-01-16 14:36:26');
    // 获取格式化时间
    const dateStr: string = Time.format(date, 'YYYY年MM月DD日 hh:mm:ss');
    setCurrentDate(dateStr);

    // 指定时间戳时间
    const timestamp=1673850986000 //2023-01-16 14:36:26
    const siteStr: string = Time.format(timestamp);
    setSiteDate(siteStr);
  }, []);

  return (
    <>
      指定日期:{currentDate}
      <hr />
      指定时间戳 1673850986000 <br/>
      {siteDate}
    </>
  );
};

export default App;
