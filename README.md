# WEB UTILS
> 这是一个使用 `electron@6.1.2` , `Create React App` 和 `antdesign`开发的一个桌面端小工具，主要功能包括 `HTML压缩`，`二维码生成`，`JS正则测试`等功能。

![img](./assets/style.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## TO DO LIST
1. [X]  加入sass编译  直接`npm install node-sass sass-loader --save-dev` 重启服务就可用了
2. [X]  qrcode 实现
3. [X]  实现链接打开浏览器,全局引入了electron方法，import 会报路径错误。实现了electron的调用
4. [ ]  实现压缩代码功能
5. [ ]  react 代码打包生成
6. [ ]  electron 代码打包，生成应用

## TIPS
安装并运行了 electron-rebuild
```
npm install --save-dev electron-rebuild

./node_modules/.bin/electron-rebuild
```

## 参考
[React + Electron 搭建一个桌面应用](https://juejin.im/post/5a6a91276fb9a01cbd58ce32)

[React + Electron 搭建一个桌面应用](https://juejin.im/post/5a6a91276fb9a01cbd58ce32)

[Electron 心得](https://github.com/QDMarkMan/CodeBlog/tree/master/Electron)

[electron 使用 Node.js 原生模块](https://blog.csdn.net/weixin_33862041/article/details/91461373)

[利用Electron简单撸一个Markdown编辑器](http://www.imooc.com/article/287712)
