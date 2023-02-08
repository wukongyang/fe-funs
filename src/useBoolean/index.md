---
category: Components
title: useBoolean
toc: content
group:
  title: 自定义hooks
  order: 5
---

# useBoolean

优雅的管理 boolean 状态的 Hook。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx">基础示例</code>

## API

```typescript
const [state, setTrue, setFalse ] = useBoolean(initialState: boolean);
```

### Params

| 参数         | 说明   | 类型      |
| ------------ | ------ | --------- |
| initialState | 必填项 | `boolean` |

### Result

| 参数     | 说明         | 类型         |
| -------- | ------------ | ------------ |
| state    | 切换 state   | `boolean`    |
| setTrue  | 设置为 true  | `() => void` |
| setFalse | 设置为 false | `() => void` |
