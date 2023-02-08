import { act, fireEvent, render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import createStore from '../';

describe('createStore', () => {
  function useCount() {
    const [count, setCount] = useState(0);
    return { count, setCount };
  }

  function useUserInfo() {
    const [userInfo, setUserInfo] = useState({ name: '哈哈' });
    return { userInfo, setUserInfo };
  }

  const store = createStore(() => ({
    count: useCount(),
    useInfo: useUserInfo(),
  }));
  const { StoreProvider, useModel, connectModel, getModel } = store;

  it('测试函数组件中使用useModel', () => {
    const TestComponent: React.FC = () => {
      const { count, setCount } = useModel('count');
      const addCount = () => setCount(count + 1);
      return <div onClick={addCount}>{count}</div>;
    };
    const { getByText } = render(
      <StoreProvider>
        <TestComponent />
      </StoreProvider>,
    );
    const counter = getByText('0');
    expect(counter.textContent).toEqual('0');
    fireEvent.click(counter);
    act(() => {
      expect(counter.textContent).toEqual('1');
    });
  });

  it('测试类组件使用connectModel', () => {
    interface IClassComponentProps {
      setCount: (value: number) => void;
      count: number;
    }
    class ClassComponent extends Component<IClassComponentProps> {
      addCount = () => {
        const { count, setCount } = this.props;
        setCount(count + 1);
      };
      render() {
        const { count } = this.props;
        return <div onClick={this.addCount}>{count}</div>;
      }
    }

    const ConnectedComponent = connectModel('count', (state) => ({
      count: state.count,
      setCount: state.setCount,
    }))(ClassComponent);

    const { getByText } = render(
      <StoreProvider>
        <ConnectedComponent />
      </StoreProvider>,
    );
    const counter = getByText('0');
    expect(counter.textContent).toEqual('0');
    fireEvent.click(counter);
    act(() => {
      expect(counter.textContent).toEqual('1');
    });
  });

  // 通过getModel读取user状态，进行操作
  it('测试组件外使用getModel', async () => {
    const { count, setCount } = getModel('count');
    setCount(count + 1);

    act(() => {
      const { count: newCount } = getModel('count');
      expect(newCount).toEqual(1);
    });
  });

  it('测试状态一致不更新页面', () => {
    let num = -1;
    const TestComponent: React.FC = () => {
      num++;
      const { userInfo, setUserInfo } = useModel('useInfo');
      const addCount = () => setUserInfo(userInfo);
      return <div onClick={addCount}>{num}</div>;
    };
    const { getByText } = render(
      <StoreProvider>
        <TestComponent />
      </StoreProvider>,
    );
    const counter = getByText('0');
    expect(counter.textContent).toEqual('0');
    fireEvent.click(counter);
    act(() => {
      expect(counter.textContent).toEqual('0');
    });
  });
});
