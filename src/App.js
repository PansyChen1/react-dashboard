import React, {Component} from 'react';
import {Button} from 'antd';
/*Component是React对象的一个属性*/
/*
应用的根组件
*/

export default class App extends Component{

  render() {
    return <div>
      App3
      <Button type="primary">Primary</Button>
    </div>
  }
}