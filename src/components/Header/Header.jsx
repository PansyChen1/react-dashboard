import React, {Component} from "react";
import "./Header.less";
import {Modal} from "antd";
import LinkButton from "../../components/LinkButton/LinkButton";

import {formateDate} from "../../utils/dateUtils";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";
import {reqWeather} from "../../api/index";
import {withRouter} from "react-router-dom";
import menuList from "../../config/muneConfig";

const { confirm } = Modal;

class Header extends Component{

  state = {
    currentTime: formateDate(Date.now()),//当前时间字符串
    dayPictureUrl: '',//天气图片url
    weather: '',//天气的文本
    currentTitle: '',//当前页面的标题
    visible: false,
  };

  /*第一次render之后执行，一般在此执行异步操作：发ajax请求/启动定时器*/
  componentDidMount() {
    //获取当前时间
    this.getTime();
    //获取当前天气
    this.getWeather();
  }

  //当前组件卸载之前调用
  componentWillUnmount() {
    //清除定时器
    clearInterval(this.intervalId)
  }

  getTime = () => {
    //每隔一秒获取当前的时间，并更新状态数据currentTime
    this.intervalId = setInterval(() => {
      const currentTime = formateDate(Date.now());
      this.setState({currentTime})
    },1000)
  };

  getWeather = async () => {
    //调用接口请求异步获取数据
    const {dayPictureUrl, weather} = await reqWeather("北京");
    //更新状态信息
    this.setState({dayPictureUrl, weather})
  };

  getTitle = () => {
    //得到当前请求的路径
    const path = this.props.location.pathname;
    let currentTitle;
    if (path) {
      menuList.map((item, index) => {
        if (path === menuList[index].key) {
          currentTitle = menuList[index].title;
        }else if (item.children) {
          //在所有子item中查找匹配的
          const cItem = item.children.find(cItem => cItem.key === path);
          //如果有值才说明有匹配的
          if (cItem) {
            currentTitle = cItem.title;
          }
        }
      });
    }
    return currentTitle;
  };

  logout = () => {
    return (
        confirm({
          title: '确定退出登陆吗?',
          onOk: () => {
            //删除保存的user数据
            storageUtils.removeUser();
            memoryUtils.user = {};

            //跳转到login
            this.props.history.replace("/login")
          },
          onCancel() {
            console.log('Cancel');
          },
        })
    );
    this.setState({visible: true})
  };

  render() {
    const {currentTime, dayPictureUrl, weather} = this.state;
    const username = memoryUtils.user.username;
    const currentTitle = this.getTitle();
    return (
        <div className="header">
          <div className="header-top">
            <span>欢迎, {username}</span>
            <LinkButton onClick={this.logout}>退出</LinkButton>
          </div>
          <div className="header-bottom">
            <div className="header-bottom-left">{currentTitle}</div>
            <div className="header-bottom-right">
              <span>{currentTime}</span>
              <img src={dayPictureUrl} alt={"weather"}/>
              <span>{weather}</span>
            </div>
          </div>
        </div>
    )
  }
}

export default withRouter(Header);