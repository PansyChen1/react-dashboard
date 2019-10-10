import React, {Component} from "react";
import "./Header.less";
import weatherPic from "../../assets/images/weather.jpg";
import {formateDate} from "../../utils/dateUtils";
import memoryUtils from "../../utils/memoryUtils";
import {reqWeather} from "../../api/index";

export default class Header extends Component{

  state = {
    currentTime: formateDate(Date.now()),//当前时间字符串
    dayPictureUrl: '',//天气图片url
    weather: '',//天气的文本
  };
  /*第一次render之后执行，一般在此执行异步操作：发ajax请求/启动定时器*/
  componentDidMount() {
    //获取当前时间
    this.getTime();
    //获取当前天气
    this.getWeather();
  }

  getTime = () => {
    //每隔一秒获取当前的时间，并更新状态数据currentTime
    setInterval(() => {
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

  render() {
    const {currentTime, dayPictureUrl, weather} = this.state;
    const username = memoryUtils.user.username;
    return (
        <div className="header">
          <div className="header-top">
            <span>欢迎, {username}</span>
            <a href="javascript:">退出</a>
          </div>
          <div className="header-bottom">
            <div className="header-bottom-left">首页</div>
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