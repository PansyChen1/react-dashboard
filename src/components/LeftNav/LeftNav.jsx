import React, { Component } from "react";
import "./LeftNav.less";
import logo from '../../assets/images/login-logo.jpg';
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon } from 'antd';
import menuList from "../../config/muneConfig";
const { SubMenu } = Menu;

class LeftNav extends Component{

  /*
  * 根据mune的数据数组生成对应的标签数组
  * 使用map() + 递归调用
  */
  getMenuNode_map = (menuList) => {
    /*
    * {
    title: "首页",
    key: "/home",
    icon: "home",
    }
    */
    return menuList.map(item => {
      if (!item.children) {
        return (
            <Menu.Item key={item.key}>
              <Link to={item.key}>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
        )
      } else {
              return (
                  <SubMenu
                      key={item.key}
                      title={
                        <span>
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                  </span>
                      }
                  >
                    {/*递归调用*/}
                    {
                      this.getMenuNode_map(item.children)
                    }
                  </SubMenu>
              )
      }
    })
  };

  /*
  * 根据mune的数据数组生成对应的标签数组
  * 使用reduce() + 递归调用
  */
  getMenuNode_reduce = (menuList) => {
    const path = this.props.location.pathname;
    return menuList.reduce((pre, item) => {
      //向pre中添加item或者submenu
      if (!item.children) {
        pre.push((
            <Menu.Item key={item.key}>
              <Link to={item.key}>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
        ))
      } else {
              // 查找一个与当前请求路径匹配的子item
              const cItem = item.children.find(cItem => cItem.key === path);

              if (cItem) {
                // 如果存在，说明当前item的子列表需要展开,this是指组件对象
                this.openKey = item.key;
              }

              pre.push((
                  <SubMenu
                      key={item.key}
                      title={
                        <span>
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                  </span>
                      }
                  >
                    {/*递归调用*/}
                    {
                      this.getMenuNode_reduce(item.children)
                    }
                  </SubMenu>
              ))
      }
      return pre;
    }, [])
  };

      // 在第一次render()之前执行一次
  //为第一次render渲染准备数据（必须是同步的）
  componentWillMount() {
    this.menuNodes = this.getMenuNode_reduce(menuList);
  }

  render() {
    //得到当前请求的路由路径 直接这样写的话pathname是undefined 因为这不是一个路由组件 可以通过withRouter高阶组件
    const path = this.props.location.pathname;

    //得到需要打开菜单项的key
    const openKey = this.openKey;

    return (
        <div className="left-nav">
          <Link to="/home" className="left-nav-header">
            <img src={logo} alt="logo"/>
            <h1>后台管理系统</h1>
          </Link>
          {/*Menu*/}
          <Menu
              mode="inline"
              theme="dark"
              selectedKeys={[path]}
              defaultOpenKeys={[openKey]}
          >
            {/*非动态的列表*/}
            {/*
            <Menu.Item key="1">
              <Link to="/home">
                <Icon type="home" />
                <span>首页</span>
              </Link>
            </Menu.Item>

            <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="shop" />
                    <span>商品</span>
                  </span>
                }
            >
              <Menu.Item key="2"><Link to="/category"><Icon type="bars" />品类管理</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/product"><Icon type="shopping" />商品管理</Link></Menu.Item>
            </SubMenu>

            <Menu.Item key="4">
              <Link to="/user">
                <Icon type="user" />
                <span>用户管理</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="5">
              <Link to="/role">
                <Icon type="team" />
                <span>角色管理</span>
              </Link>
            </Menu.Item>

            <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="area-chart" />
                    <span>图形图表</span>
                  </span>
                }
            >
              <Menu.Item key="6"><Link to="/line-chart"><Icon type="line-chart" />折线图</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/bar-chart"><Icon type="bar-chart" />条形图</Link></Menu.Item>
              <Menu.Item key="8"><Link to="/pie-chart"><Icon type="pie-chart" />饼图</Link></Menu.Item>
            </SubMenu>
            */}
            {
              this.menuNodes
            }
          </Menu>
        </div>
    )
  }
}

/*
* withRouter高阶组件
* 包装非路由的组件，返回一个新的组件，向非路由组件传递三个属性 history/location/match
* */
export default withRouter(LeftNav)