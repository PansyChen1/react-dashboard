import React, {Component} from "react";
import "./Header.less";
import weatherPic from "../../assets/images/weather.jpg";

export default class Header extends Component{
  render() {
    return (
        <div className="header">
          <div className="header-top">
            <span>欢迎 admin</span>
            <a href="javascript:">退出</a>
          </div>
          <div className="header-bottom">
            <div className="header-bottom-left">首页</div>
            <div className="header-bottom-right">
              <span>2019-10-09 12:00</span>
              <img src={weatherPic} alt={"weather"}/>
              <span>晴</span>
            </div>
          </div>
        </div>
    )
  }
}