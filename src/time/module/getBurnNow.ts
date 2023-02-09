import { getBurnTime } from './getDuration';
/**
 * @description 获取目标日期距现在的时长时间戳
 * @method getBurnNow(date)
 * @param {Date|string} [dateT] 目标日期
 * @return {number} 时长
 * @example
 * const dateK='2023-01-15 12:36:26'
   const duration: number = Time.getBurnNow(dateK);
 */
function getBurnNow(date: Date | string): number;
/**
 * @description 获取目标日期距现在的格式化时长
 * @method getBurnNow(date,mat)
 * @param {Date|string} [dateT] 目标日期
 * @param {string} [mat='hh:mm:ss'] 格式
 * @return {string} 时长
 * @example
 * const dateK='2023-01-15 12:36:26'
   const duration: string = Time.getBurnNow(dateK,'DD天hh小时mm分ss秒');
 */
function getBurnNow(date: Date | string, mat: string): string;
function getBurnNow(date: Date | string, mat?: string) {
  try {
    let time = Math.abs(new Date(date).getTime() - new Date().getTime()) / 1000;
    return getBurnTime(time, mat);
  } catch (error) {
    console.error('fe-funs error', error);
    return '';
  }
}
export default getBurnNow;
