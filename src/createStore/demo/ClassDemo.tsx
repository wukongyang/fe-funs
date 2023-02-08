import React, { Component } from 'react';
import { connectModel, StoreProvider } from './store';

// 定义class组件props
interface IClassDemoProps {
  setOther: React.Dispatch<React.SetStateAction<string>>;
  other: number;
  num: number;
}

class ClassDemo extends Component<IClassDemoProps> {
  // 通过this.props获取到方法修改状态
  onChange = () => {
    this.props.setOther(this.props.other + '1');
  };

  render() {
    console.log(this.props.num);
    // 通过this.props获取到状态进行展示
    return (
      <button onClick={this.onChange} type="button">
        {this.props.other}--改变other中的状态
      </button>
    );
  }
}

// 通过高阶组件connectModel把other状态中的属性和方法注入到类组件中
const Demo = connectModel('other', (state) => ({
  other: state.other,
  setOther: state.setOther,
}))(ClassDemo);

function App() {
  return (
    <StoreProvider>
      <Demo num={1} />
    </StoreProvider>
  );
}

export default App;
