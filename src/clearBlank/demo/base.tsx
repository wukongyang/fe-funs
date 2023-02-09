import React, { useState } from 'react';
import { clearBlank } from 'fe-funs';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const onClear = () => {
    setValue(clearBlank(value));
  };

  return (
    <>
      <input
        type="text"
        placeholder="请输入"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onClear} type="button">
        清除两边空格
      </button>
    </>
  );
};

export default App;
