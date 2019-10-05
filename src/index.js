/*
入口js
 */
import React from 'react';
import ReactDOM from  'react-dom';

/*引入自定义模块至少有一个 . */
import App from './App';
import memoryUtils from "./utils/memoryUtils";
import storageUtils from "./utils/storageUtils";

//读取local中的user，保存在内存中
const user = storageUtils.getUser();
memoryUtils.user = user;

//将App组件标签渲染到index页面的div标签上
ReactDOM.render(<App/>, document.getElementById('root'));