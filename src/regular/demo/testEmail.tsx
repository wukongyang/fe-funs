import React, { useState } from 'react';
import { Regular } from 'tools';

const App: React.FC = () => {
  const [email, setEmail] = useState<string>('te-st@qq.com.cn');

  function emailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function checkEmail() {
    if (Regular.testEmail(email)) {
      alert('邮箱校验通过');
    } else {
      alert('邮箱校验未通过');
    }
  }

  return (
    <>
      <div>邮箱:</div>
      <input onChange={emailChange} value={email} type="text" />
      <button
        type="button"
        onClick={checkEmail}
        style={{ margin: '0 16px' }}
      >
        校验邮箱
      </button>
    </>
  );
};

export default App;
