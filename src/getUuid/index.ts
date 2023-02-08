/**
 * 返回32位长度的uuid
 */
const getUuid = (): string => {
  // 字符串集合
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789';
  const maxPo = chars.length;
  let uuid: string = '';
  // 循环拼接uuid
  while (uuid.length < 32) {
    uuid += chars.charAt(Math.floor(Math.random() * maxPo));
  }
  return uuid;
};
export default getUuid;
