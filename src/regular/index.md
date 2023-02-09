---
category: Components
title: 通用正则
toc: content
order: 5
group:
  title: 通用
---

# 通用正则

## 获取正则表达式(getReg)

### API

```ts
import { Regular } from 'fe-funs';

// 手机号简单校验
const phoneSimpleReg = Regular.getReg('phoneSimple');
```

### Options

| 参数 |  说明  |   类型   | 默认值 | 是否必须 |
| :--: | :----: | :------: | :----: | :------: |
| name | 正则名 | `string` |   -    |   `是`   |

### Name value

|    正则名    |                                 说明                                 |
| :----------: | :------------------------------------------------------------------: |
| phoneSimple  |                          1 开头的 11 位数字                          |
| mobilePhone  |                    手机格式（13、4、5、7、8、9）                     |
|  teleSimple  |                             简单校验座机                             |
|  telePhone   |                         座机格式 需加区号和-                         |
|   regEmail   |                                 邮箱                                 |
|    regCn     |                                 中文                                 |
|    regEn     |                                 英文                                 |
| idCardSimple |                             简单身份证号                             |
|    regSpe    | `~!@#$%^&\*()\_+<>?:"{},./;'·！#￥（——）：；“”‘、，\|《。》？、【】[ |

---

## 校验手机号(testMobile)

<code src='./demo/testMobile.tsx'>基础示例</code>

### API

```ts
import { Regular } from 'fe-funs';
// 校验手机号
const mobile = '15680670753';
Regular.testMobile(mobile);
```

### Options

|   参数   |     说明     |       类型       | 默认值 | 是否必须 |
| :------: | :----------: | :--------------: | :----: | :------: |
|  phone   |   手机号码   | `string｜number` |   -    |   `是`   |
| isSimple | 是否简单校验 |    `boolean`     | `true` |   `否`   |

---

## 校验固定电话(testTelPhone)

<code src='./demo/testTelPhone.tsx'>基础示例</code>

### API

```ts
import { Regular } from 'fe-funs';

// 校验固定电话
const phone = '0107111111';
Regular.testTelPhone(phone);
```

### Options

|   参数   |     说明     |       类型       | 默认值 | 是否必须 |
| :------: | :----------: | :--------------: | :----: | :------: |
|  phone   | 固定电话号码 | `string｜number` |   -    |   `是`   |
| isSimple | 是否简单校验 |    `boolean`     | `true` |   `否`   |

---

## 校验邮箱(testEmail)

<code src='./demo/testEmail.tsx'>基础示例</code>

### API

```ts
import { Regular } from 'fe-funs';

// 校验邮箱
const email = 'te-st@qq.com.cn';
Regular.testEmail(email);
```

### Options

| 参数  | 说明 |   类型   | 默认值 | 是否必须 |
| :---: | :--: | :------: | :----: | :------: |
| email | 邮箱 | `string` |   -    |   `是`   |

---

## 校验身份证号(testIdCard)

<code src='./demo/testIdCard.tsx'>基础示例</code>

### API

```ts
import { Regular } from 'fe-funs';

// 校验身份证号码
const idCard = '110101190001011009';
Regular.testIdCard(idCard);
```

### Options

|   参数   |     说明     |   类型    | 默认值 | 是否必须 |
| :------: | :----------: | :-------: | :----: | :------: |
|   card   |   身份证号   | `string`  |   -    |   `是`   |
| isSimple | 是否简单校验 | `boolean` | `true` |   `否`   |

---

## 校验字符

<code src='./demo/testChar.tsx'>基础示例</code>

### API

```ts
import { Regular } from 'fe-funs';

// 校验中文
const charCn = '你好';
Regular.testCn(charCn);

// 校验英文
const charEn = 'hello';
Regular.testEn(charEn);

// 校验含有特殊字符
const charSpe = '，。、';
Regular.testSpe(charSpe);
```

### Options

| 参数 | 说明 |   类型   | 默认值 | 是否必须 |
| :--: | :--: | :------: | :----: | :------: |
| char | 字符 | `string` |   -    |   `是`   |

---

## 校验 Url(testUrl)

<code src='./demo/testUrl.tsx'>基础示例</code>

### API

```ts
import { Regular } from 'fe-funs';

// 校验身份证号码
const url = 'www.baidu.com';
Regular.testUrl(url);
```

### Options

| 参数 |   说明   |   类型   | 默认值 | 是否必须 |
| :--: | :------: | :------: | :----: | :------: |
| url  | url 地址 | `string` |   -    |   `是`   |

---
