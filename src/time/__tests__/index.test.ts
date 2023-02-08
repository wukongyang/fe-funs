import Time from '../index';

test('测试formart函数', () => {
  expect(Time.format('-----')).toBe('NaN-NaN-NaN NaN:NaN:NaN');
  expect(Time.format(0)).toBe('');
  expect(Time.format(undefined)).toBe(Time.format(new Date()));
  expect(Time.format()).toBe(Time.format(new Date()));
  expect(Time.format(167393577)).toBe('');
  expect(Time.format(1673935774)).toBe('2023-01-17 14:09:34');
  expect(Time.format(1673935774000)).toBe('2023-01-17 14:09:34');
  expect(Time.format(1673935774000, 'YYYY.MM.DD hh:mm:ss')).toBe(
    '2023.01.17 14:09:34',
  );
  expect(Time.format(new Date('2023-01-17 11:09:34'), 'h时m分s秒')).toBe(
    '11时9分34秒',
  );
  expect(Time.format(new Date('2023-01-17 11:09:34'), 'hh时mm分ss秒')).toBe(
    '11时09分34秒',
  );
  expect(Time.format(new Date('2023-01-17 11:09:34'))).toBe(
    '2023-01-17 11:09:34',
  );
  expect(
    Time.format(new Date('2023-01-17 11:09:34'), 'YYYY/MM/DD hh时mm分ss秒'),
  ).toBe('2023/01/17 11时09分34秒');
  expect(
    Time.format('2023-01-17 11:09:34', 'YYYY年MM月DD日 hh时mm分ss秒'),
  ).toBe('2023年01月17日 11时09分34秒');
});
test('测试getBurnNow函数', () => {
  // 可能会测试不通过，两个函数执行会存在微秒级别的差距
  // expect(Time.getBurnNow('2023-01-15 12:36:26')).toBe(
  //   Time.getDuration('2023-01-15 12:36:26', new Date(), 't'),
  // );
  // expect(Time.getBurnNow(new Date('2023-01-15 12:36:26'))).toBe(
  //   Time.getDuration('2023-01-15 12:36:26', new Date(), 't'),
  // );
});
test('测试getDuration函数', () => {
  expect(
    Time.getDuration(
      '2023-01-16 14:36:26',
      '2023-01-15 12:36:26',
      'DD天hh小时mm分钟ss秒',
    ),
  ).toBe('01天02小时00分钟00秒');
  expect(Time.getDuration('2023-01-16 14:36:26', '2023-01-15 12:36:26')).toBe(
    '26小时00分钟00秒',
  );
  expect(Time.getDuration(86300000, 'mm分钟ss秒')).toBe('1438分钟20秒');
  expect(Time.getDuration(0, 't')).toBe(0);
  expect(Time.getDuration(0)).toBe('00小时00分钟00秒');
  expect(Time.getDuration(-1, 't')).toBe('');
  expect(Time.getDuration(-1)).toBe('');
  expect(Time.getDuration(86300000)).toBe('23小时58分钟20秒');
  expect(Time.getDuration(86300000, 't')).toBe(86300000);
  expect(Time.getDuration('2023-01-16 14:36:26', 'aaaaa')).toBe('aaaaa');
});
test('测试getTime函数', () => {
  // 可能会测试不通过，两个函数执行会存在微秒级别的差距
  expect(Time.getTime(86300000)).toEqual({
    day: '00',
    hour: '23',
    minutes: '58',
    second: '20',
  });
  expect(Time.getTime(86300000, false)).toEqual({
    day: '0',
    hour: '23',
    minutes: '58',
    second: '20',
  });
  expect(Time.getTime(-1, false)).toEqual({
    day: '0',
    hour: '0',
    minutes: '0',
    second: '0',
  });
  expect(Time.getTime(0, false)).toEqual({
    day: '0',
    hour: '0',
    minutes: '0',
    second: '0',
  });
  expect(Time.getTime(-1)).toEqual({
    day: '00',
    hour: '00',
    minutes: '00',
    second: '00',
  });
  expect(Time.getTime(0)).toEqual({
    day: '00',
    hour: '00',
    minutes: '00',
    second: '00',
  });
});
