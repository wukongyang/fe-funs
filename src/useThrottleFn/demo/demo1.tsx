/**
 * title: 基础用法
 * desc ThrottledValue 每隔 500ms 变化一次。
 */

import React, { useState } from 'react';
import { useThrottleFn } from 'tools';

export default () => {
  const [value, setValue] = useState<string>();
  const onThrottled = useThrottleFn((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, { wait: 500 });

  return (
    <div>
      <input
        value={value}
        onChange={onThrottled}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <br />
      <div>throttledValue: {value}</div>
    </div>
  );
};
