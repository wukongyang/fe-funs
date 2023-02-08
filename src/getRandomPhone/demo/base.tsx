import React, { useState } from 'react';
import { getRandomPhone } from 'tools';

const App: React.FC = () => {
  const [randomPhone, setRandomPhone] = useState<string>('');

  const onGetDevice = () => {
    const phone = getRandomPhone();
    setRandomPhone(phone);
  };

  return (
    <>
      <button onClick={onGetDevice} type="button">
        获取随机手机号
      </button>
      {!!randomPhone && <p>获取结果：{randomPhone}</p>}
    </>
  );
};

export default App;
