---
category: Components
title: 清除空格
toc: content
order: 3
group:
  title: 通用
---

# 清除空格 `clearBlank`

## 介绍

- 去除掉字符串里的前后空格和空字符等，比如：前后空格和\u0000`

## 示例

<code src='./demo/base.tsx'>清除两边空格</code>

## APi

```ts
  clearBlank(value: string): string
```

### Options

| 参数  | 说明             | 类型     | 返回值   |
| ----- | ---------------- | -------- | -------- |
| value | 需要清除的字符串 | `string` | `string` |
