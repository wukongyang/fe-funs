/**
 * 在一定时间范围内，随机触发一次回调
 * @param min 最小时间，单位秒
 * @param max 最大时间，单位秒
 * @param callback 需要执行的回调函数
 */
const randomTrigger = (min: number, max: number, callback: () => void) => {
  if (min >= max) {
    throw new Error('参数start需小于end的值!');
  }
  const diff = max - min;
  const random = Math.floor(Math.random() * diff) + min;
  setTimeout(() => {
    callback();
  }, random * 1000);
};

export default randomTrigger;
