import { act, renderHook } from '@testing-library/react';
import sleep from '../../sleep';
import useThrottleFn from '../index';

interface ParamsObj {
  fn: (...arg: any) => any;
  deps?: any[];
  wait: number;
}

const setUp = ({ fn, wait }: ParamsObj) =>
  renderHook(() => useThrottleFn(fn, { wait }));

let hook: any;

describe('useThrottleFn', () => {
  it('run, cancel and flush should work', async () => {
    let count = 0;
    const throttleFn = (gap: number) => {
      count += gap;
    };
    act(() => {
      hook = setUp({
        fn: throttleFn,
        wait: 500,
      });
    });
    await act(async () => {
      hook.result.current(1);
      expect(count).toBe(1);
      hook.result.current(1);
      hook.result.current(1);
      hook.result.current(1);
      expect(count).toBe(1);
      await sleep(450); // t: 450
      hook.result.current(2);
      expect(count).toBe(1);
      await sleep(100); // t: 550
      hook.result.current(2);
      expect(count).toBe(3);
      hook.result.current(3);
      await sleep(500); // t: 1050
      expect(count).toBe(3);
    });
  });
});
