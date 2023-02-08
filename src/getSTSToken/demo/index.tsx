import React, { useEffect, useState } from 'react';
import getSTSToken, { ISTSToken } from '../index';

export default () => {
  const [token, setToken] = useState<Partial<ISTSToken>>({});
  useEffect(() => {
    getSTSToken()
      .then((data) => {
        setToken(data);
      })
      .catch((error) => {
        console.warn('getStstoken error', error);
      });
  }, []);
  return (
    <div style={{ overflow: 'auto' }}>
      获取临时token相关参数
      <p>accessKeyId: {token.accessKeyId}</p>
      <p>accessKeySecret: {token.accessKeySecret}</p>
      <p>securityToken: {token.securityToken}</p>
    </div>
  );
};
