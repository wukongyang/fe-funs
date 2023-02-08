import React, { useEffect, useState } from 'react';
import { getIp } from 'tools';

export default () => {
  const [ip, setIp] = useState<string>('');
  useEffect(() => {
    getIp()
      .then((ip) => {
        setIp(ip);
      })
      .catch((error) => {
        console.warn('getIp error', error);
      });
  }, []);
  return <p>当前客户端ip: {ip}</p>;
};
