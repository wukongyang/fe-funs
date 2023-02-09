import React, { useState } from 'react';
import { Regular } from 'fe-funs';

const App: React.FC = () => {
  const [phone, setPhone] = useState<string>('13423456543');

  function phoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(e.target.value);
  }

  function checkPhone() {
    if (Regular.testMobile(phone)) {
      alert('手机号校验通过');
    } else {
      alert('手机号校验未通过');
    }
  }

  return (
    <>
      <div>手机号:</div>
      <input onChange={phoneChange} value={phone} type="text" />
      <button type="button" onClick={checkPhone} style={{ margin: '0 16px' }}>
        校验手机号
      </button>
    </>
  );
};

export default App;
