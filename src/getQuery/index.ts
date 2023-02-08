function getQueryObj(url: string): Record<string, string> {
  // 查找 '?' 号所在的索引
  const searchIndex = url.indexOf('?');
  // '?' 号后面接的是索引参数，如果找到则+1，去除'?' 号
  const search = searchIndex !== -1 ? url.substring(searchIndex + 1) : '';
  // 把搜索参数字符串提过URLSearchParams转成对象形式
  const usp = new URLSearchParams(search);
  return Object.fromEntries(usp.entries());
}
/**
 * @description 获取当前url所有参数
 * @method getQuery(url)
 * @param {string} url
 * @return {object}
 * @example
   const keyValues: string = getQuery();
 */
function getQuery(): Record<string, string>;
/**
 * @description 通过key获取当前地址栏指定参数
 * @method getQuery(key)
 * @param {string} key
 * @return {string}
 * @example
 * const key='test_key'
   const keyValue: string = getQuery(key);
 */
function getQuery(key: string): string;
/**
 * @description 通过指定url获取所有参数
 * @method getQuery(url)
 * @param {string} url
 * @return {object}
 * @example
 * const url='test_url'
   const keyValues: string = getQuery(url);
 */
function getQuery(url: string): Record<string, string>;

/**
 * @description 通过指定url获取指定参数
 * @method getQuery(url,key)
 * @param {string} url
 * @param {string} key
 * 
 * @return {object}
 * @example
 * const url='test_url'
 * const key='test_key'
   const value: string = getQuery(url,key);
 */
function getQuery(url: string, key: string): string;
function getQuery(...params: string[]) {
  let url: string = window.location.href;
  if (!url) return '';
  if (params.length === 1) {
    if (
      params[0].startsWith('http') ||
      params[0].startsWith('https') ||
      params[0].startsWith('www')
    ) {
      url = decodeURIComponent(params[0]);
      return getQueryObj(url);
    }
    // 处理传入空值的情况
    if (!params[0]) {
      return getQueryObj(url);
    }
    // 返回当前地址的指定key
    let queryobj = getQueryObj(url);
    return queryobj[params[0]];
  } else if (params.length === 2) {
    let queryobj = getQueryObj(decodeURIComponent(params[0]));
    return queryobj[params[1]];
  }
  return getQueryObj(url);
}

export default getQuery;
