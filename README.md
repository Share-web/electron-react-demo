## react Hooks+electron ##
node 版本 > 10.0.0
npm 版本 > 6.0.0
### 环境配置

<!-- 创建react应用 -->
npx create-react-app my-app

<!-- 创建electron应用 -->
npm i electron -D

<!-- 安装工具：
1、环境判断：开发/生产
2、多命令并行执行应用
3、执行应用顺序和时机
4、跨平台设置环境变量
 -->
npm i electron-is-dev -D
npm i concurrently -D
npm i wait-on -D
npm i cross-env -D


### 目录结构