const IpGetApi = 'https://fc.xiongmaoboshi.com/h5/tool/client/ip';

const getIp = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', IpGetApi);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        if ('ip' in JSON.parse(xhr.responseText)) {
          resolve(JSON.parse(xhr.responseText).ip);
        } else {
          reject('get ip error');
        }
      }
    };
    xhr.onerror = (err) => {
      reject(err.toString());
    };
    xhr.send();
  });
};

export default getIp;
