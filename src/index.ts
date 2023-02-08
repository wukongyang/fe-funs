/** 通用 */
export { default as clearBlank } from './clearBlank';
export { default as Clipboard } from './clipboard';
/** 状态 */
export { default as createStore } from './createStore';
export {
  default as getDevice,
  DeviceInfoType,
  DeviceType,
  PlatformType,
  RuntimeType,
} from './getDevice';
/** 通用API */
export { default as getIp } from './getIp';
export { default as getQuery } from './getQuery';
/** 随机方法 */
export { default as getRandomPhone } from './getRandomPhone';
export { default as getSTSToken } from './getSTSToken';
export { default as getUuid } from './getUuid';
export { default as randomTrigger } from './randomTrigger';
export { default as Regular } from './regular';
export { default as shallow } from './shallow';
export { default as sleep } from './sleep';
export { default as Time } from './time';
/** 移动端 */
export { default as UniWeb } from './uniWeb';
/** hooks */
export { default as useBoolean } from './useBoolean';
export { default as useDebounceFn } from './useDebounceFn';
export { default as useMemoizedFn } from './useMemoizedFn';
export { default as useSafeState } from './useSafeState';
export { default as useThrottleFn } from './useThrottleFn';
export { default as VersionChecker } from './versionChecker';
