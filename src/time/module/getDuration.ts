import type { optType } from './common';
import { transTime } from './common';
function getTime(time: number | Date | string): number {
  if (typeof time === 'number') {
    return time / 1000;
  } else {
    return Math.abs(new Date(time).getTime() - new Date().getTime()) / 1000;
  }
}
export function getBurnTime(time: number, format?: string): string | number {
  // 不存在格式，则直接返回时长毫秒时间戳
  if (!format) {
    return time * 1000;
  }
  const formatKey: string[] = ['D', 'h', 'm', 's']; // 格式化 key 的集合
  const startKeyIndex: number = formatKey.findIndex(
    (v) => v === format.substring(0, 1),
  ); // 开始计算的key的索引

  let day = startKeyIndex === 0 ? Math.floor(time / (24 * 3600)) : 0;
  let hour =
    startKeyIndex <= 1 ? Math.floor((time - day * 24 * 3600) / 3600) : 0;
  let minutes =
    startKeyIndex <= 2
      ? Math.floor((time - day * 24 * 3600 - hour * 3600) / 60)
      : 0;
  let second = startKeyIndex === 3 ? time : Math.floor(time % 60);
  // 日期数据
  const opt: optType = {
    D: day,
    h: hour,
    m: minutes,
    s: second,
  };
  return transTime(opt, format);
}

/**
 * @description 根据两个目标日期获取时长时间戳
 * @method getDuration(dateStart,dateEnd)
 * @param {Date|string} [dateT] 日期1
 * @param {Date|string} [dateK] 日期2
 * @param {string} [mat='t'] 格式
 * @return {number} 时长
 * @example
 * const dateT='2023-01-16 14:36:26' 
   const dateK='2023-01-15 12:36:26'
   const duration: number = Time.getDuration(dateT,dateK,'t');
 */
function getDuration(
  dateT: Date | string,
  dateK: Date | string,
  mat: 't',
): number;
/**
 * @description 根据两个目标日期获取格式化时长
 * @method getDuration(dateStart,dateEnd,mat)
 * @param {Date|string} [dateT] 日期1
 * @param {Date|string} [dateK] 日期2
 * @param {string} [mat='hh:mm:ss'] 格式
 * @return {string} 时长
 * @example
 * const dateT='2023-01-16 14:36:26' 
   const dateK='2023-01-15 12:36:26'
   const duration: string = Time.getDuration(dateT,dateK,'DD天hh小时mm分ss秒');
 */
function getDuration(
  dateT: Date | string,
  dateK: Date | string,
  mat?: string,
): string;
/**
   * @description 根据时间戳获取格式化时长
   * @method getDuration(timestamp,mat)
   * @param {number} [timestamp] 时长时间戳(毫秒)
   * @param {string} [mat='hh:mm:ss'] 格式
   * @return {string} 时长
   * @example
   * const timestamp=86300000 
     const duration: string = Time.getDateTime(timestamp,'mm分ss秒');
   */
function getDuration(timestamp: number, mat?: string): string;
function getDuration(...params: any[]) {
  try {
    if (typeof params[0] === 'number' && params[0] < 0) {
      return '';
    }
    let defaultMat: string = 'hh小时mm分钟ss秒';
    let format: string = defaultMat;
    let time: number = 0;
    let timeT: number;
    switch (params.length) {
      case 1:
        time = getTime(params[0]);
        break;
      case 2:
        // 判断第二个参数是否是格式
        timeT = new Date(params[1]).getTime();
        if (typeof params[0] === 'number' || !timeT) {
          if (params[1] === 't') {
            format = '';
          } else {
            format = params[1] || defaultMat;
          }
          time = getTime(params[0]);
        } else {
          // 计算相差时长
          time = Math.abs(new Date(params[0]).getTime() - timeT) / 1000;
        }

        break;
      case 3:
        // 指定返回时间戳
        if (params[2] === 't') {
          format = '';
        } else {
          format = params[2] || defaultMat;
        }
        // 计算相差时长
        time =
          Math.abs(
            new Date(params[0]).getTime() - new Date(params[1]).getTime(),
          ) / 1000;
        break;
    }
    return getBurnTime(time, format);
  } catch (error) {
    console.error('fe-funs error', error);
    return '';
  }
}

export default getDuration;
