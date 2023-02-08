import { getReg } from './common';
/**
 * @description 校验邮箱
 * @method testEmail(email)
 * @param {string}  邮箱
 * @return {boolean} 是否通过
 * @example
 * const email = 'te-st@qq.com.cn';
   Regular.testEmail(email);
 */
function testEmail(email: string): boolean {
  const regEmail: RegExp = getReg('regEmail');
  return regEmail.test(email);
}
export default testEmail;
