/** 把内容写入到粘贴板 */
function write(
  content: string,
  onSuccess?: () => void,
  onError?: (e: any) => void,
) {
  navigator.clipboard
    .writeText(content)
    .then(() => {
      if (onSuccess && typeof onSuccess === 'function') {
        onSuccess();
      }
    })
    .catch(onError);
}

/** 读取粘贴板内容 */
function read(
  onSuccess?: (clipText: string) => void,
  onError?: (e: any) => void,
) {
  return navigator.clipboard
    .readText()
    .then((clipText) => {
      if (onSuccess && typeof onSuccess === 'function') {
        onSuccess(clipText);
      }
      return clipText;
    })
    .catch(onError);
}

export default {
  write,
  read,
};
