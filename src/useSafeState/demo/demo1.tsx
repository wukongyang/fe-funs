import { useSafeState } from 'tools';
import React, { useEffect, useState } from 'react';

const Child = () => {
  const [value, setValue] = useSafeState<string>();

  useEffect(() => {
    setTimeout(() => {
      setValue('data loaded from server');
    }, 5000);
  }, []);

  const text = value || 'Loading...';

  return <div>{text}</div>;
};

export default () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button type='button' onClick={() => setVisible(false)}>卸载子组件</button>
      {visible && <Child />}
    </div>
  );
};
