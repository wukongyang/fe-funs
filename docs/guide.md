

## 📦 安装

```bash
$ npm install --save fe-funs
# or
$ yarn add fe-funs
```

## 🔨 使用

```ts
import { getDevice } from 'fe-funs';
```

## 🤝 参与共建

```bash
$ git clone git@github.com:Wukongyang/fe-funs.git
$ cd fe-funs
$ npm i
$ npm start
```

打开浏览器访问 http://127.0.0.1:8000

### 1、方法目录结构描述

```bash
src
  ├── index.ts                  # 函数库源码的入口文件
  ├── packageA
  │    ├── __tests__            # 单元测试文件夹
  │    │   └──index.tests.ts    # 单元测试代码
  │    ├── demo                 # demo 文件夹
  │    │   └── base.tsx         # demo 组件
  │    ├── index.ts             # 函数 A 源码文件
  │    └── index.md             # 函数 A 使用文档
```

### 2、开发完成

开发分支推送到远程，创建 PR 到 master 分支
