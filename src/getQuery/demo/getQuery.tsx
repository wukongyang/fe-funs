import React, { useState } from 'react';
import { getQuery } from 'tools';

const App: React.FC = () => {
  const [url, setUrl] = useState<string>('http://test.com?test_key=test_value');
  const [query, setQuery] = useState<string>('');

  function urlChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  function getKey() {
    setQuery(getQuery(url,'test_key'))
  }

  return (
    <>
      <div>指定url:</div>
      <input onChange={urlChange} value={url} type="text" />
      <button type="button" onClick={getKey} style={{ margin: '0 16px' }}>
        获取参数
      </button>
      参数值:{query}
    </>
  );
};

export default App;
