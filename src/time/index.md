---
category: Components
title: 时间处理
toc: content
order: 4
group:
  title: 通用
---

# 时间处理

## 格式化时间(format)

- 将日期或时间戳处理成指定格式

<code src='./demo/formartTime.tsx'>基础示例</code>

### API

```ts
import { Time } from 'tools';
// 获取当前时间
const date: Date = new Date();
// 获取格式化时间
const dateStr: string = Time.format(date, 'YYYY年MM月DD日 hh:mm:ss');

// 指定时间戳时间
const timestamp = 1673850986000; //2023-01-16 14:36:26
const str: string = Time.format(timestamp);
```

### Options

|  参数   |   说明   |          类型          |        默认值         | 是否必须 |
| :-----: | :------: | :--------------------: | :-------------------: | :------: |
|  time   |   日期   | `Date｜string｜number` |     `new Date()`      |   `否`   |
| formart | 转换格式 |        `string`        | `YYYY-MM-DD hh:mm:ss` |   `否`   |

---

## 时长(getDuration)

- 将时间戳或者两个目标日期处理成指定格式时长（最大单位支持到天）

<code src='./demo/getDuration.tsx'>基础示例</code>

### API

```ts
import { Time } from 'tools';
// 根据时长时间戳获取
const timestamp = 86300000;
const duration: string = Time.getDuration(timestamp, 'mm分钟ss秒');

// 根据两个目标日期获取格式化时长
const dateT = '2023-01-16 14:36:26';
const dateK = '2023-01-15 12:36:26';
const durationD: string = Time.getDuration(
  dateT,
  dateK,
  'DD天hh小时mm分钟ss秒',
);
```

### Options

|   参数    |    说明    |             类型              |       默认值       | 是否必须 |
| :-------: | :--------: | :---------------------------: | :----------------: | :------: |
| timestamp | 时长时间戳 |           `number`            |         -          |   `是`   |
|   dateT   |   日期 1   |        `Date｜string`         |         -          |   `是`   |
|   dateK   |   日期 2   |        `Date｜string`         |         -          |   `是`   |
|  formart  |  转换格式  | `string｜'t'(返回毫秒时间戳)` | `hh小时mm分钟ss秒` |   `否`   |

---

## 目标日期距离当前时间的时长(getBurnNow)

- 目标日期距离当前时间的时长处理成指定格式（最大单位支持到天）

<code src='./demo/getBurnNow.tsx'>基础示例</code>

### API

```ts
import { Time } from 'tools';

// 获取目标日期与现在的时长
const date = '2023-01-15 12:36:26';
const burnNow: string = Time.getBurnNow(date, 'mm分钟ss秒');
```

### Options

|  参数   |   说明   |      类型      | 默认值 | 是否必须 |
| :-----: | :------: | :------------: | :----: | :------: |
|  dateK  |   日期   | `Date｜string` |   -    |   `是`   |
| formart | 转换格式 |    `string`    |   -    |   `否`   |

---

## 根据时间戳获取时间数据(getTime)

- 根据时长时间戳获取时间数据

<code src='./demo/getTime.tsx'>基础示例</code>

### API

```ts
import { Time } from 'tools';

const timestamp = 86300000;
const { day, hour, minutes, second } = Time.getTime(timestamp);
```

### Options

|   参数    |    说明    |   类型   | 默认值 | 是否必须 |
| :-------: | :--------: | :------: | :----: | :------: |
| timestamp | 时长时间戳 | `number` |   -    |   `是`   |
