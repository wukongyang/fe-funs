/*!
 * tool-clearBlank
 */
/** 去除掉字符串里的前后空格和空字符等，比如：前后空格和\u0000 */
export default function clearBlank(str: string) {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a \`string\`, got \`${typeof str}\``);
  }
  const result = str
    .trim()
    .replace(
      /\u0000|\u0001|\u0002|\u0003|\u0004|\u0005|\u0006|\u0007|\u0008|\u0009|\u000a|\u000b|\u000c|\u000d|\u000e|\u000f|\u0010|\u0011|\u0012|\u0013|\u0014|\u0015|\u0016|\u0017|\u0018|\u0019|\u001a|\u001b|\u001c|\u001d|\u001e|\u001f|\u007F/g,
      '',
    );
  return result;
}
