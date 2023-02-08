const reg: Record<regNameType, RegExp> = {
  //简单校验是否是1开头的11位数字
  phoneSimple: /^1\d{10}$/,
  //手机格式
  mobilePhone: /^1[3|4|5|7|8|9]\d{9}$/,
  //座机格式
  teleSimple: /((^0\d{2,3})-?)?\d{7,8}$/,
  //座机格式 需加区号和-
  telePhone: /0\d{2,3}-\d{7,8}/,
  // 邮箱
  regEmail: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
  //中文
  regCn: /^[[\u4E00-\u9FFF]+$/,
  //英文
  regEn: /^[A-Za-z]+$/,
  //简单身份证
  idCardSimple:
    /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i,
  //特殊字符
  regSpe:
    /[`~!@#$%^&*()_+<>?:"{},./;'·！#￥（——）：；“”‘、，|《。》？、【】[\]]/,
  // url网址
  regUrl:
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\\.-]+)+[\w\-\\._~:/?#[\]@!\\$&'\\*\\+,;=.]+$/,
};
type regNameType =
  | 'phoneSimple'
  | 'mobilePhone'
  | 'teleSimple'
  | 'telePhone'
  | 'regEmail'
  | 'regCn'
  | 'regEn'
  | 'idCardSimple'
  | 'regSpe'
  | 'regUrl';
/**
 * @description 获取正则
 * @method getReg(name)
 * @param {regNameType} 正则名
 * @return {RegExp} 正则表达式
 * @example
 * const phoneSimpleReg = Regular.getReg('phoneSimple');
 */
export function getReg(name: regNameType): RegExp {
  return reg[name];
}
