import { getReg } from './common';
function numToString(num: string | number): string {
  return typeof num === 'number' ? num.toString() : num;
}
/**
 * @description 校验手机号
 * @method testMobile(phone,isSimple)
 * @param {number | string}  手机号
 * @param {string} [isSimple=true] 简单校验(简单校验只校验是否满足11位数)
 * @return {boolean} 是否通过
 * @example
 * const mobile='15680670753'
   Regular.testMobile(mobile)
 */
export function testMobile(
  phone: string | number,
  isSimple: boolean = true,
): boolean {
  const mobile: string = numToString(phone);
  const phoneSimpleReg = getReg('phoneSimple');
  const mobilePhoneReg = getReg('mobilePhone');
  return isSimple ? phoneSimpleReg.test(mobile) : mobilePhoneReg.test(mobile);
}
/**
 * @description 校验固定电话
 * @method testTelPhone(phone,isSimple)
 * @param {number | string}  号码
 * @param {string} [isSimple=true] 简单校验（复杂校验需要加上区号和-）
 * @return {boolean} 是否通过
 * @example
 * const phone='0107111111'
   Regular.testTelPhone(phone)
 */
export function testTelPhone(
  phone: string | number,
  isSimple: boolean = true,
): boolean {
  const phoneT: string = numToString(phone);
  const teleSimpleReg = getReg('teleSimple');
  const telePhoneReg = getReg('telePhone');
  return isSimple ? teleSimpleReg.test(phoneT) : telePhoneReg.test(phoneT);
}
