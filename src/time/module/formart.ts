import type { optType } from './common';
import { transTime } from './common';

/**
 * @description 格式化时间
 * @method format(time,mat)
 * @param {number | Date | string} [time = new Date()] 时间戳（毫秒）或者日期格式,默认使用当前时间(new Date())
 * @param {string} [mat='YYYY-MM-DD hh:mm:ss'] 时间格式,不填时默认使用'YYYY-MM-DD hh:mm:ss'格式,更改需替换中间连接符号就行'YYYY年MM月DD日 hh时mm分ss秒'
 * @example
 * const timestamp=1673850986000
   const dateStr: string = Time.format(timestamp, 'YYYY年MM月DD日 hh:mm:ss');
 */
function format(
  time: number | Date | string = new Date(),
  mat?: string,
): string {
  try {
    let date: Date = new Date(),
      format: string = mat || 'YYYY-MM-DD hh:mm:ss';
    // 处理时间戳，js一般获取的时间戳是13位根据实际情况做判断处理
    if (typeof time === 'number') {
      if (time.toString().length === 10) {
        date = new Date(time * 1000);
      } else if (time.toString().length === 13) {
        date = new Date(time);
      } else {
        return '';
      }
    } else if (typeof time === 'string') {
      date = new Date(time);
    } else {
      if (time instanceof Date) {
        date = time;
      }
    }
    // 日期数据
    const opt: optType = {
      Y: date.getFullYear(), // 年
      M: date.getMonth() + 1, // 月
      D: date.getDate(), // 日
      h: date.getHours(), // 时
      m: date.getMinutes(), // 分
      s: date.getSeconds(), // 秒
    };
    return transTime(opt, format);
  } catch (error) {
    console.error('fe-funs error', error);
    return '';
  }
}
export default format;
