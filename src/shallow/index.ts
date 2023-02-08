/**
 *  浅比较对象
 *
 * @param obj1
 * @param obj2
 * @returns boolean
 * @example
 * ```js
 * shallow({a: 1}, {a:1, b:2})
 */
export default function shallow(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}
