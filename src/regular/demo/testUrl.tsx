import React, { useState } from 'react';
import { Regular } from 'tools';

const App: React.FC = () => {
  const [url, setUrl] = useState<string>('www.baidu.com');

  function urlChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  function checkUrl() {
    if (Regular.testUrl(url)) {
      alert('url校验通过');
    } else {
      alert('url校验未通过');
    }
  }

  return (
    <>
      <div>url:</div>
      <input onChange={urlChange} value={url} type="text" />
      <button
        type="button"
        onClick={checkUrl}
        style={{ margin: '0 16px' }}
      >
        校验url
      </button>
    </>
  );
};

export default App;
