---
category: Components
title: useSafeState
toc: content
group:
  title: 自定义hooks
---

# useSafeState

用法与 `React.useState` 完全一样，但是在组件卸载后异步回调内的 `setState` 不再执行，避免因组件卸载后更新状态而导致的内存泄漏。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx">基础示例</code>

## API

```typescript
const [state, setState] = useSafeState(initialState);
```

### Params

| 参数         | 说明   | 类型 |
| ------------ | ------ | ---- |
| initialState | 必填项 | `T`  |

### Result

| 参数     | 说明     | 类型         |
| -------- | -------- | ------------ |
| state    | 当前状态 | `boolean`    |
| setState | 设置状态 | `() => void` |
