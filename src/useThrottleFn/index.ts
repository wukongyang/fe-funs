import { useEffect, useRef } from 'react';

import { useMemoizedFn } from '..';

/** 节流 */
// eslint-disable-next-line @typescript-eslint/ban-types
function useThrottle<T extends Function>(fn: T, options: { wait: number }) {
  const { current } = useRef<{ fn: T; timer: NodeJS.Timer | null }>({
    fn,
    timer: null,
  });
  useEffect(() => {
    current.fn = fn;
  }, [fn]);

  return useMemoizedFn(function f(...args) {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        current.timer = null;
      }, options.wait);
      current.fn.call(this, ...args);
    }
  });
}

export default useThrottle;
