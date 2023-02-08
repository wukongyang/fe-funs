type optKeyType = 'D' | 'h' | 'm' | 's';
type optType = Partial<Record<'Y' | 'M', number>> & Record<optKeyType, number>;
export function addTimePrefix(value: number, isPrefix: boolean = true): string {
  return value < 10 && isPrefix ? `0${value}` : `${value}`;
}
export function transTime(opt: optType, format: string): string {
  let reg = new RegExp('Y+|M+|D+|h+|m+|s+', 'g');
  let regY = new RegExp('Y');
  let formartStr: string = format.replace(reg, (v) => {
    let dateStr: string = v;
    // 处理年
    if (regY.test(v)) {
      let y = '' + opt['Y'];
      let len = 4 - v.length;
      dateStr = y.substring(len);
    } else {
      let key: optKeyType = v.substring(0, 1) as optKeyType;
      dateStr = addTimePrefix(opt[key], v.length === 2);
    }
    return dateStr;
  });
  return formartStr;
}

export type { optKeyType, optType };
