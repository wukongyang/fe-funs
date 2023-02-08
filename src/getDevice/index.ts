export const enum DeviceInfoType {
  device = 'device',
  runtime = 'runtime',
  platform = 'platform',
}

export const enum DeviceType {
  mobile = 'mobile',
  pc = 'pc',
}

export const enum PlatformType {
  ios = 'ios',
  android = 'android',
  huawei = 'huawei',
  oppo = 'oppo',
  vivo = 'vivo',
  xiaomi = 'xiaomi',
  mac = 'mac',
  windows = 'windows',
}
export const enum RuntimeType {
  wechat = 'wechat',
  wework = 'wework',
  app = 'app',
  dingtalk = 'dingtalk',
  yach = 'yach',
  browser = 'browser',
}

/** 根据穿参返回对应类型 */
type IGetDeviceMap<T extends keyof typeof DeviceInfoType> =
  T extends DeviceInfoType.device
    ? DeviceType
    : T extends DeviceInfoType.runtime
    ? RuntimeType
    : T extends DeviceInfoType.platform
    ? PlatformType
    : never;

/**
 * 获取设备信息
 * @device: 只区分pc和mobile
 * @platform: 区分手机类型，比如ios、xiaomi、huawei、oppo、vivo等，希望能持续更新，未匹配上直接返回android
 * @runtime: 只区分运行环境，wechat、app、safari、dingtalk(钉钉)、yach(知音楼)、other
 */
export default function getDevice<T extends keyof typeof DeviceInfoType>(
  type: T,
): IGetDeviceMap<T> {
  const ua = navigator.userAgent.toLowerCase();
  let result: DeviceType | PlatformType | RuntimeType = DeviceType.mobile;

  switch (type) {
    case DeviceInfoType.device:
      if (/(iphone|ipad|ipod|android)/i.test(ua)) {
        result = DeviceType.mobile;
      } else {
        result = DeviceType.pc;
      }
      return result as IGetDeviceMap<T>;
    case DeviceInfoType.platform:
      if (/(iphone|ipad|ipod)/i.test(ua)) {
        result = PlatformType.ios;
      } else if (/(huawei|honor)/i.test(ua)) {
        result = PlatformType.huawei;
      } else if (
        /(oppo|x9007|x907|x909|r831s|r827t|r821t|r811|r2017|pacm00|pbem00)/i.test(
          ua,
        )
      ) {
        result = PlatformType.oppo;
      } else if (/(mi |xiaomi)/i.test(ua)) {
        result = PlatformType.xiaomi;
      } else if (/(vivo)/i.test(ua)) {
        result = PlatformType.vivo;
      } else if (/(android)/i.test(ua)) {
        result = PlatformType.android;
      } else if (/(macintosh)/i.test(ua)) {
        result = PlatformType.mac;
      } else if (/(windows)/i.test(ua)) {
        result = PlatformType.windows;
      } else {
        result = PlatformType.android;
      }
      return result as IGetDeviceMap<T>;
    case DeviceInfoType.runtime:
      if (/(micromessenger)/i.test(ua)) {
        if (/(wxwork)/i.test(ua)) {
          result = RuntimeType.wework;
        } else {
          result = RuntimeType.wechat;
        }
      } else if (/(drpanda)/i.test(ua)) {
        // 未处理ABC
        result = RuntimeType.app;
      } else if (/(dingtalk)/i.test(ua)) {
        result = RuntimeType.dingtalk;
      } else if (/(yach|yachandroid|yachprod)/i.test(ua)) {
        result = RuntimeType.yach;
      } else {
        result = RuntimeType.browser;
      }
      return result as IGetDeviceMap<T>;
    default:
      return result as IGetDeviceMap<T>;
  }
}
