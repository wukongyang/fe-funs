---
category: Components
title: 获取地址栏参数
toc: content
order: 6
group:
  title: 通用
---

# 获取 Query 参数

传入指定 url 则从指定 url 中查找参数（不传则当前地址栏 url），传入 key，查找指定 key 的参数值

<code src='./demo/getQuery.tsx'>基础示例</code>

### API

```ts
import { getQuery } from 'fe-funs';
// 获取query参数
const key = 'test_key';
const url = 'http://test.com?test_key=test_value';
const value: string = getQuery(url, key);
```

### Options

| 参数 |   说明   |   类型   | 默认值 | 是否必须 |
| :--: | :------: | :------: | :----: | :------: |
| url  | 指定 url | `string` |   -    |   `否`   |
| key  |  参数名  | `string` |   -    |   `否`   |

---
