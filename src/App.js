import React, {Component} from 'react';
import {Button} from 'antd';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';

/*Component是React对象的一个属性*/
/*应用的根组件*/

export default class App extends Component{

  render() {
    return (
        // 最外层有一个路由器 也可以使用HashRouter 不同表现为在url中多一个#
        <BrowserRouter>
          {/*只匹配其中的一个*/}
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/' component={Admin}></Route>
          </Switch>
        </BrowserRouter>
    )
  }
}