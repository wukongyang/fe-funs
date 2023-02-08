import { getReg } from './common';
/**
 * @description 校验Url
 * @method testUrl(url)
 * @param {string}  url
 * @return {boolean} 是否通过
 * @example
 * const url = 'www.example.com';
   Regular.testUrl(url);
 */
export default function testUrl(url: string): boolean {
  const regUrl = getReg('regUrl');
  return regUrl.test(url);
}
