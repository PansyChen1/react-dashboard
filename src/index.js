/*
入口js
 */
import React from 'react';
import ReactDOM from  'react-dom';

/*引入自定义模块至少有一个 . */
import App from './App';

//将App组件标签渲染到index页面的div标签上
ReactDOM.render(<App/>, document.getElementById('root'));