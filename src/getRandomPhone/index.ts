const phonePrefix = [
  133,
  149,
  153,
  173,
  177,
  180,
  181,
  189,
  191,
  199, // 电信
  130,
  131,
  132,
  145,
  155,
  156,
  166,
  171,
  175,
  176,
  185,
  186, // 联通
  134,
  135,
  136,
  137,
  138,
  139,
  147,
  150,
  151,
  152,
  157,
  158,
  159,
  172,
  178,
  182,
  183,
  184,
  187,
  188,
  198, // 移动
];

/** 随机生成电话号码 */
const getRandomPhone = () => {
  let phone = '****';
  // 随机一个前缀
  const prefix = phonePrefix[Math.floor(Math.random() * phonePrefix.length)];
  // 随机后四位数
  let suffix = Math.random().toFixed(4).replace('0.', '');
  phone = prefix + phone + suffix;
  return phone;
};

export default getRandomPhone;
