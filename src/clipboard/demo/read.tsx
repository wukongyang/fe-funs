import React, { useState } from 'react';
import { Clipboard } from 'fe-funs';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const onRead = async () => {
    const res = await Clipboard.read();
    if (res) setValue(res);
  };

  return (
    <>
      <input
        type="text"
        placeholder="请在此处粘贴测试"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onRead} type="button">
        读取粘贴板内容
      </button>
    </>
  );
};

export default App;
