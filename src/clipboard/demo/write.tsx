import React, { useState } from 'react';
import { Clipboard } from 'tools';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const onCopy = () => {
    if (!value) return;
    Clipboard.write(
      value,
      () => {
        alert('复制成功!');
      },
      (err) => {
        console.log(err);
      },
    );
  };

  return (
    <>
      <input
        type="text"
        placeholder="请输入要复制的文本"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onCopy} type="button">
        复制输入框内容
      </button>
    </>
  );
};

export default App;
