import { useState } from 'react';

/** 1. 引入createStore */
import { createStore } from 'tools';

/** 2. 定义各个原子化状态 */
// user
const useUserModel = () => {
  const [userInfo, setUserInfo] = useState<{ name: string }>({ name: 'name' });
  return { userInfo, setUserInfo };
};

// other
const useOtherModel = () => {
  const [other, setOther] = useState<number>(20);
  return { other, setOther };
};

/** 3. 组合所有状态 */
const store = createStore(() => ({
  user: useUserModel(),
  other: useOtherModel(),
}));

/** 向外暴露useModel, StoreProvider, getModel, connectModel */
export const { useModel, StoreProvider, getModel, connectModel } = store;
