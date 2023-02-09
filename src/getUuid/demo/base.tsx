import React, { useState } from 'react';
import { getUuid } from 'fe-funs';

const App: React.FC = () => {
  const [uuid, setUuid] = useState<string>('');

  const onGetUuid = () => {
    const chars = getUuid();
    setUuid(chars);
  };

  return (
    <>
      <button onClick={onGetUuid} type="button">
        获取uuid
      </button>
      {!!uuid && <p>获取结果：{uuid}</p>}
    </>
  );
};

export default App;
