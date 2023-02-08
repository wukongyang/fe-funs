---
category: Components
title: 剪切板
toc: content
order: 2
group:
  title: 通用
---

# 剪切板 `Clipboard`

## 介绍

- 可以把指定内容添加到剪切板中
- 读取当前剪切板内容

`注意：必须在localhost或者https信任网站下才能使用`

## 示例

<code src='./demo/write.tsx' description="把指定内容添加到剪切板中">复制内容示例</code>

<code src='./demo/read.tsx' description="读取当前剪切板内容">粘贴内容示例</code>

## API

### 复制内容 API

```ts
Clipboard.write(value: string, onSuccess?: () => void, onError?: () => void)
```

### 复制内容 Options

| 参数      | 说明         | 类型         |
| --------- | ------------ | ------------ |
| value     | 复制的内容   | `string`     |
| onSuccess | 复制成功回调 | `() => void` |
| onError   | 复制失败回调 | `() => void` |

### 获取粘贴板内容 API

```ts
Clipboard.read(onSuccess?: (value: string) => void, onError?: (reason: any) => void)
```

### 获取粘贴板内容 Options

| 参数      | 说明         | 类型                      |
| --------- | ------------ | ------------------------- |
| onSuccess | 复制成功回调 | `(value: string) => void` |
| onError   | 复制失败回调 | `(reason: any) => void`   |
