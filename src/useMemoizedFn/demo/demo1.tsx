import React, { useState, useCallback } from 'react';
import { useMemoizedFn } from 'tools';

export default () => {
  const [count, setCount] = useState(0);

  const callbackFn = useCallback(() => {
    alert(`Current count is ${count}`);
  }, [count]);

  const memoizedFn = useMemoizedFn(() => {
    alert(`Current count is ${count}`);
  });

  return (
    <>
      <p>count: {count}</p>
      <button
        type="button"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Add Count
      </button>
      <div style={{ marginTop: 16 }}>
        <button type="button" onClick={callbackFn}>
          call callbackFn
        </button>
        <button type="button" onClick={memoizedFn} style={{ marginLeft: 8 }}>
          call memoizedFn
        </button>
      </div>
    </>
  );
};