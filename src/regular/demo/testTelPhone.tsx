import React, { useState } from 'react';
import { Regular } from 'fe-funs';

const App: React.FC = () => {
  const [telphone, setTelPhone] = useState<string>('0107111111');

  function telPhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTelPhone(e.target.value);
  }

  function checkTelPhone() {
    if (Regular.testTelPhone(telphone)) {
      alert('固定电话校验通过');
    } else {
      alert('固定电话校验未通过');
    }
  }

  return (
    <>
      <div>固定电话:</div>
      <input onChange={telPhoneChange} value={telphone} type="text" />
      <button
        type="button"
        onClick={checkTelPhone}
        style={{ margin: '0 16px' }}
      >
        校验固定电话
      </button>
    </>
  );
};

export default App;
