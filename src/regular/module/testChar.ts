import { getReg } from './common';
/**
 * @description 校验中文
 * @method testCn(char)
 * @param {string}  字符
 * @return {boolean} 是否通过
 * @example
 * const char = '你好';
   Regular.testCn(char);
 */
export function testCn(char: string): boolean {
  const regCn = getReg('regCn');
  return regCn.test(char);
}
/**
 * @description 校验含有特殊字符
 * @method testCnSpe(char)
 * @param {string}  字符
 * @return {boolean} 是否通过
 * @example
 * const char = '，。、';
   Regular.testCnSpe(char);
 */
export function testSpe(char: string): boolean {
  const regSpe = getReg('regSpe');
  return regSpe.test(char);
}
/**
 * @description 校验英文
 * @method testCn(char)
 * @param {string}  字符
 * @return {boolean} 是否通过
 * @example
 * const char = 'hello';
   Regular.testEn(char);
 */
export function testEn(char: string) {
  const regEn = getReg('regEn');
  return regEn.test(char);
}
