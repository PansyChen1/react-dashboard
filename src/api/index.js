// 包含应用中所有接口请求函数的模块
// 每个函数的返回值都是promise

import ajax from "./ajax";
import jsonp from "jsonp";
import {message} from "antd";

// export function reqLogin(username, password) {
//   return ajax("/login", {username, password}, "POST");
// }

// 改写为箭头函数
export const reqLogin = (username, password) => ajax("/login", {username, password}, "POST");

export const reqAddUser = (user) => ajax("/manage/user/add", user, "POST");

/*
* jsonp请求的接口请求函数
* jsonp解决ajax跨域的原理
* 1）jsonp只能解决GET类型的ajax请求跨域问题
* 2）jsonp请求不是ajax请求，而是一般的get请求
* 3）基本原理
*   浏览器端：
*       动态生成<script>来请求后台接口（src就是接口的url）
*       定义好用于接收相应数据的函数（fn），并将函数名通过请求参数提交给后台
*   服务器端：
*       接收到请求处理产生结果数据后，返回一个函数调用的js代码，并将结果数据作为实参传入函数调用
*   浏览器端：
*       收到响应自动执行函数调用的js代码，也就执行了提前定义好的回调函数，并得到了需要的结果数据
* 解决一般的GET请求
*/

export const reqWeather = (city) => {
  //将数据交出去，执行一个Promise
  return new Promise((resolve, reject) => {
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`;
    //发送jsonp请求
    jsonp(url, {}, (err, data) => {
      //成功
      if (!err && data.status === "success") {
        //取出需要的数据
        const { dayPictureUrl, weather } = data.results[0].weather_data[0];
        resolve({dayPictureUrl, weather});
        console.log("success------")
      } else {
        //失败
        message.error("获取天气信息失败！");
      }
    })
  })
};
reqWeather("北京")



