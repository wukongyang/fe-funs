import { addTimePrefix } from './common';
/**
 * @description 根据时间戳获取时间
 * @method getTime(timestamp)
 * @param {number} [timestamp] 时间戳
 * @return {Object} Record<'day'|'hour'|'minutes'|'second',string>
 * @example
 * const timestamp='86400000' 
   const { day, hour, minutes, second } = Time.getTime(timestamp);
 */
function getTime(
  timestamp: number,
  isPrefix: boolean = true,
): Record<'day' | 'hour' | 'minutes' | 'second', string> {
  if (timestamp <= 0) {
    return {
      day: addTimePrefix(0, isPrefix),
      hour: addTimePrefix(0, isPrefix),
      minutes: addTimePrefix(0, isPrefix),
      second: addTimePrefix(0, isPrefix),
    };
  }
  let time: number = timestamp / 1000;
  let dayNum = Math.floor(time / (24 * 3600));
  let day = addTimePrefix(dayNum, isPrefix);
  let hourNum = Math.floor((time - dayNum * 24 * 3600) / 3600);
  let hour = addTimePrefix(hourNum, isPrefix);
  let minutesNum = Math.floor(
    (time - dayNum * 24 * 3600 - hourNum * 3600) / 60,
  );
  let minutes = addTimePrefix(minutesNum, isPrefix);
  let second = addTimePrefix(Math.floor(time % 60), isPrefix);
  // 日期数据
  return {
    day,
    hour,
    minutes,
    second,
  };
}
export default getTime;
