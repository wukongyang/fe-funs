import React, { useState } from 'react';
import shallow from '../index';

const App = () => {
  const [compare1, setCompare1] = useState<boolean>(null);
  const [compare2, setCompare2] = useState<boolean>(null);

  const handleCompare1 = () => {
    setCompare1(shallow({ a: 1 }, { a: 1, b: 2 }));
  };

  const handleCompare2 = () => {
    setCompare2(shallow({ a: 1, b: 2 }, { a: 1, b: 2 }));
  };

  return (
    <>
      <button type="button" onClick={handleCompare1}>
        比较{`${JSON.stringify({ a: 1 })}`}和
        {`${JSON.stringify({ a: 1, b: 2 })}`}
      </button>
      <p>比较结果: {String(compare1)}</p>
      <br />
      <button type="button" onClick={handleCompare2}>
        比较{`${JSON.stringify({ a: 1, b: 2 })}`}和
        {`${JSON.stringify({ a: 1, b: 2 })}`}
      </button>
      <p>比较结果: {String(compare2)}</p>
    </>
  );
};

export default App;
