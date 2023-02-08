import React, { useState } from 'react';
import { Regular } from 'tools';

const App: React.FC = () => {
  const [idCard, setIdCard] = useState<string>('110101190001011009');

  function idCardChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIdCard(e.target.value);
  }

  function checkIdCard() {
    if (Regular.testIdCard(idCard)) {
      alert('身份证号校验通过');
    } else {
      alert('身份证号未通过');
    }
  }

  return (
    <>
      <div>身份证号:</div>
      <input onChange={idCardChange} value={idCard} type="text" />
      <button
        type="button"
        onClick={checkIdCard}
        style={{ margin: '0 16px' }}
      >
        校验身份证
      </button>
    </>
  );
};

export default App;
