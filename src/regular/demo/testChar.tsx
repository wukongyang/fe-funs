import React, { useState } from 'react';
import { Regular } from 'tools';

const App: React.FC = () => {
  const [cn, setCn] = useState<string>('你好');
  const [spe, setSpe] = useState<string>('，。、');
  const [en, setEn] = useState<string>('hello');

  function cnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCn(e.target.value);
  }

  function checkCn() {
    if (Regular.testCn(cn)) {
      alert('中文校验通过');
    } else {
      alert('中文校验未通过');
    }
  }
  function speChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSpe(e.target.value);
  }

  function checkSpe() {
    if (Regular.testSpe(spe)) {
      alert('特殊字符校验通过');
    } else {
      alert('特殊字符校验未通过');
    }
  }
  function enChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEn(e.target.value);
  }

  function checkEn() {
    if (Regular.testEn(en)) {
      alert('英文校验通过');
    } else {
      alert('英文校验未通过');
    }
  }

  return (
    <>
      <div>中文:</div>
      <input onChange={cnChange} value={cn} type="text" />
      <button type="button" onClick={checkCn} style={{ margin: '0 16px' }}>
        校验中文
      </button>
      <div>英文:</div>
      <input onChange={enChange} value={en} type="text" />
      <button type="button" onClick={checkEn} style={{ margin: '0 16px' }}>
        校验英文
      </button>
      <div>特殊字符:</div>
      <input onChange={speChange} value={spe} type="text" />
      <button type="button" onClick={checkSpe} style={{ margin: '0 16px' }}>
        校验特殊字符
      </button>
    </>
  );
};

export default App;
