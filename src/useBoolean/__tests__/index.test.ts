import { act, renderHook } from '@testing-library/react';
import useBoolean from '../index';

const setUp = (defaultValue: boolean) =>
  renderHook(() => useBoolean(defaultValue));

describe('useBoolean', () => {
  it('test on methods', async () => {
    const { result } = setUp(false);
    const [value, setTrue, setFalse] = result.current;
    expect(value).toBe(false);

    act(() => {
      setTrue();
    });
    expect(result.current[0]).toBe(true);

    act(() => {
      setFalse();
    });
    expect(result.current[0]).toBe(false);
  });

  it('test on default value', () => {
    const hook = setUp(true);
    expect(hook.result.current[0]).toBe(true);
  });
});
