# react-dashborad
## 1.技术选型
### 1）前台数据展现/交互/组件化         
react/react-router-dom/antd/redux
### 2）后台应用        
node/mongodb/mongoose/multer/blueimp-md5
### 3）前后台交互
ajax请求：axios/jsonp/promise/async/await        
接口测试工具：postman       
### 4）模块化     
ES6/CommonJS       
### 5）项目构建/工程化        
webpack/create-react-app/eslint       
### 6）其他     
富文本编辑器：react-draft-wysiwyg/draft-js/draftjs-to-html      
图表库：echarts/echarts-for-react       
## 2.目录结构
### 1）api：ajax相关
### 2）assets：公共资源
### 3）components：非路由组件
### 4）config：配置
### 5）pages：路由组件
### 6）utils：工具模块
### 7）App.js：应用根组件
### 8）index.js：入口js文件
## 3.安装命令
### 1)安装组件库 yarn add antd
### 2)实现组件的按需打包 yarn add react-app-rewired customize-cra babel-plugin-import 同时修改package.json文件（scripts的修改）
### 3)自定义antd主题 yarn add less less-loader 同时修改config-overrides.js文件
### 4)引入路由 yarn add react-router-dom
### 5)安装axios yarn add axios
### 6)安装本地存储 yarn add store

## 4.维持登陆与自动登陆
### 1）登陆后，刷新依然是已登陆状态（维持登陆）
### 2）登陆后，关闭浏览器后打开浏览器访问依然是已登陆状态（自动登陆）
### 3）登陆后，访问登陆路径自动跳转到管理界面
