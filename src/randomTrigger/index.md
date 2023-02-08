---
category: Components
title: 随机时间触发函数
toc: content
group:
  title: 随机数
  order: 3
---

# 随机时间触发函数 `randomTrigger`

## 介绍

- 在一定时间范围内，随机触发一次回调.

## 示例

<code src='./demo/base.tsx'>基础示例</code>

## APi

```ts
  randomTrigger(min: number, max: number, callback: () => void)
```

### Options

| 参数     | 说明               | 类型       |
| -------- | ------------------ | ---------- |
| min      | 最小时间，单位秒   | `number`   |
| max      | 最大时间，单位秒   | `number`   |
| callback | 需要执行的回调函数 | `Function` |
