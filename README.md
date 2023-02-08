# tools

组件库 dumi 文档: [https://d.umijs.org/](https://d.umijs.org/)

组件库线上文档地址：[https://cms-dev.xiongmaoboshi.com/common/tools](https://cms-dev.xiongmaoboshi.com/common/tools)

## tools 包目录规范

```text
src
  ├── index.ts                  # 函数库源码的入口文件
  ├── packageA
  │    ├── __tests__            # 单元测试文件夹
  │    │   └──index.tests.ts    # 单元测试代码
  │    ├── demo                 # demo 文件夹
  │    │   └── base.tsx         # demo 组件
  │    ├── index.ts             # 函数 A 源码文件
  │    └── index.md             # 函数 A 使用文档
```

## 函数 A 使用文档 规范

```
---

category: Components
title: 函数 A
toc: content
group:
title: 通用
order: 1

---

# 函数名称 `packageA`

## 介绍

- 函数 packageA 介绍.

## 示例

<code src="./demo/base.tsx">基础用法</code>
```

## APi

```ts
  packageA(): string
```

### Options

| 参数 | 说明 | 类型     | 返回值   |
| ---- | ---- | -------- | -------- |
| -    | -    | `string` | `string` |
