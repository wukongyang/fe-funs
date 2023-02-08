import { getReg } from './common';
/**
 * @description 校验身份证号
 * @method testIdCard(card)
 * @param {string}  身份证号
 * @param {string} [isSimple=true] 简单校验（复杂校验需校验地区编码以及校验位是否正确）
 * @return {boolean} 是否通过
 * @example
 * const idCard = '110101190001011009';
   Regular.testIdCard(idCard);
 */

function testIdCard(card: string, isSimple: boolean = true): boolean {
  const city: Record<string, string> = {
    '11': '北京',
    '12': '天津',
    '13': '河北',
    '14': '山西',
    '15': '内蒙古',
    '21': '辽宁',
    '22': '吉林',
    '23': '黑龙江 ',
    '31': '上海',
    '32': '江苏',
    '33': '浙江',
    '34': '安徽',
    '35': '福建',
    '36': '江西',
    '37': '山东',
    '41': '河南',
    '42': '湖北 ',
    '43': '湖南',
    '44': '广东',
    '45': '广西',
    '46': '海南',
    '50': '重庆',
    '51': '四川',
    '52': '贵州',
    '53': '云南',
    '54': '西藏 ',
    '61': '陕西',
    '62': '甘肃',
    '63': '青海',
    '64': '宁夏',
    '65': '新疆',
    '71': '台湾',
    '81': '香港',
    '82': '澳门',
    '91': '国外 ',
  };
  // let tip = '';
  let pass = true;
  const idCardSimple = getReg('idCardSimple');
  if (!card || !idCardSimple.test(card)) {
    // tip = '身份证号格式错误!';
    pass = false;
  } else if (!city[card.substring(0, 2)] && !isSimple) {
    // tip = '身份证号地址编码错误!';
    pass = false;
  } else {
    //18位身份证需要验证最后一位校验位
    if (card.length === 18 && !isSimple) {
      let codeArr = card.split('');
      //∑(ai×Wi)(mod 11)
      //加权因子
      let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      //校验位
      let parity = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
      let sum = 0;
      let ai = 0;
      let wi = 0;
      for (let i = 0; i < 17; i++) {
        ai = +codeArr[i];
        wi = factor[i];
        sum += ai * wi;
      }
      // 最终的校验位
      let last = parity[sum % 11];
      if (last !== codeArr[17]) {
        // tip = '校验位错误';
        pass = false;
      }
    }
  }
  // if (!pass) console.log(tip);
  return pass;
}
export default testIdCard;
