import React, { Component } from 'react';
// import memoryUtils from "../../utils/memoryUtils";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import LeftNav from "../../components/LeftNav/LeftNav";
import Header from "../../components/Header/Header";
import Home from "../../pages/Home/Home";
import Category from "../../pages/Category/Category";
import User from "../../pages/User/User";
import Role from "../../pages/Role/Role";
import Product from "../../pages/Product/Product";
import BarChart from "../../pages/BarChart/BarChart";
import LineChart from "../../pages/LineChart/LineChart";
import PieChart from "../../pages/PieChart/PieChart";
import "./Admin.less";

const { Footer, Sider, Content } = Layout;

//后台管理的路由组件
export default class Admin extends Component {
  render () {
    // //如果内存中没有存储user，表示当前未登陆，则自动跳转到登陆界面
    // if (!user || !user.id) {
    //   return <Redirect to="/login"/>
    // }
    return (
        <Layout className="admin-layout-sider">
          <Sider>
            <LeftNav />
          </Sider>
          <Layout className="admin-layout-content">
            <Header>Header</Header>
            <Content className="content">
              <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/category" component={Category}/>
                <Route path="/product" component={Product}/>
                <Route path="/user" component={User}/>
                <Route path="/role" component={Role}/>
                <Route path="/pie-chart" component={PieChart}/>
                <Route path="/bar-chart" component={BarChart}/>
                <Route path="/line-chart" component={LineChart}/>
                <Redirect to="/home"/>
              </Switch>
            </Content>
            <Footer className="footer">推荐使用谷歌浏览器，页面体验效果更佳。</Footer>
          </Layout>
        </Layout>
    )
  }
}