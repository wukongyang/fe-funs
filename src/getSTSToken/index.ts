const STSTokenGetApi =
  'https://fc.xiongmaoboshi.com/h5/dp-resource/sts-token/get';

export interface ISTSToken {
  accessKeyId: string;
  accessKeySecret: string;
  securityToken: string;
}

interface IResponse {
  code: 0 | number;
  data: ISTSToken;
  message?: string;
}

const getSTSToken = (): Promise<ISTSToken> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', STSTokenGetApi);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const result: IResponse = JSON.parse(xhr.responseText);
        if (result.code === 0) {
          resolve(JSON.parse(xhr.responseText).data);
        } else {
          reject(`get sts token error,${result.message}`);
        }
      }
    };
    xhr.onerror = (err) => {
      reject(err.toString());
    };
    xhr.send();
  });
};

export default getSTSToken;
