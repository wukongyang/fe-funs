---
category: Components
title: 设备信息
toc: content
order: 1
group:
  title: 通用
  order: 1
---

# 获取设备信息 `getDevice`

## 介绍

根据参数类型返回对应的设备信息

- 区分 pc 和 mobile
- 区分手机类型，比如 ios、xiaomi、huawei、oppo、vivo 等，未匹配上直接返回 android
- 只区分运行环境，wechat、app、safari、dingtalk(钉钉)、other

## 示例

<!-- prettier-ignore -->
<code src="./demo/device.tsx">区分pc和mobile</code>

<!-- prettier-ignore -->
<code src="./demo/platform.tsx">获取设备品牌类型</code>

<!-- prettier-ignore -->
<code src="./demo/runtime.tsx">获取当前运行环境</code>

## APi

```ts
  import {getDevice} from 'fe-funs'
  getDevice(type: DeviceInfoType): DeviceType | PlatformType | RuntimeType
```

### Options

| 参数                      | 说明              | 类型           | 返回值                                           |
| ------------------------- | ----------------- | -------------- | ------------------------------------------------ |
| `DeviceInfoType.device`   | 区分 pc 和 mobile | `DeviceType`   | `pc` `mobile`                                    |
| `DeviceInfoType.platform` | 获取设备品牌类型  | `PlatformType` | `ios` `xiaomi` `huawei` `oppo` `vivo` `android`  |
| `DeviceInfoType.runtime`  | 获取当前运行环境  | `RuntimeType`  | `wechat` `app` `safari` `dingtalk(钉钉)` `other` |
