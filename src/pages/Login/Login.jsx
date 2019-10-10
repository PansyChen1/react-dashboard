import React, {Component} from 'react';
import { Form, Icon, Input, Button} from 'antd';
import './Login.less';
import logo from "../../assets/images/login-logo.jpg";

// import {reqLogin}from "../../api/index";
// import memoryUtils from "../../utils/memoryUtils";
// import storageUtils from "../../utils/storageUtils";
// import {Redirect} from "react-router-dom";

const Item = Form.Item;//不能写在import之前

//登陆的路由组件
class Login extends Component {
  handleSubmit = (event) => {
    // 阻止事件的默认行为
    event.preventDefault();

    //对所有表单字段进行校验
    // this.props.form.validateFields(async (err, values) => {
      //校验成功
      // if (!err) {
      //   console.log('提交登陆的ajax请求 ', values);
      //
      //   const {username, password} = values;
      //   const result = await reqLogin(username, password);
      //
        // if (result.status === 0) {
          // message.success("登陆成功")

          // const user = result.data;
          // memoryUtils.user = user; //保存在内存中
          // storageUtils.saveUser(user); //保存到本地中去

          //跳转到后台管理界面（不需要再回退到登陆界面，如果需要回退到登陆界面，则使用push()方法）
          this.props.history.replace("/");
        // } else {
        //   message.error(result.msg)
        // }

        // reqLogin(username, password).then(response => {
        //   console.log("校验成功", response.data);
        // }).catch(error => {
        //   console.log("校验失败！")
        // });
    //   } else {
    //     console.log("校验失败！")
    //   }
    // });

    // 得到form对象
    // const form = this.props.form;
    // 获取表单项输入的数据
    // const values = form.getFieldsValue();
    // console.log("values", values)
  };

  validatePwd = (rule, value, callback) => {
    // callback();//验证通过
    // callback('xxx');//验证失败，并指定提示的文本
    if (!value) {
      callback("请输入密码");
    } else if (value.length <= 4) {
      callback("密码至少4位");
    } else if (value.length >= 12) {
      callback("密码最多12位");
    } else if (!/^[a-zA-Z0-9_]+$/) {
      callback("密码必须是英文、数字或下划线组成");
    }
  };

  render () {
    // 如果用户已经登陆，自动跳转到用户管理界面
    // const user = memoryUtils.user;
    // if (user || user._id) {
    //   return <Redirect to="/"/>
    // }

    // 得到具有强大功能的form对象
    // const form = this.props.form;
    const { getFieldDecorator } = this.props.form;
    return <div className="login">
      <header className="login-header">
        <img src={logo} alt="" />
        <h1>React项目：后台管理系统</h1>
      </header>
      <section className="login-content">
        <h2>用户登陆</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Item>
            {/*getFieldDecorator是一个高阶函数*/}
            {getFieldDecorator('username', {/*配置对象： 属性名是特定的一些名称*/
              // 声明式验证：直接使用别人定义好的验证规则进行验证
              // 自定义验证
              rules: [
                  { required: true, message: '请输入用户名' },
                  { min: 4, message: '用户名至少4位'},
                  { max: 12, message: '用户名最多12位'},
                  { pattern: /^[a-zA-Z0-9_]+$/, message: "用户名必须是英文、数字或下划线组成"},
                ],
              initialValue: "admin"//设置初始值
            })(
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                />,
            )}
          </Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                  { validator : this.validatePwd }
              ],
            })(
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSubmit}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  }
}

//1 高阶函数
  // 1）一类特别的函数
    // a 接受函数类型的参数
    // b 返回值是函数

  // 2）常见的高阶函数
    // a 定时器：setTimeout()/setInterval()
    // b Promise：Promise(() => {}) then(value => {}, reason => {})
    // c 数组遍历相关的方法：forEach()/filter()/map()/reduce()/find()/findIndex()

    // d 函数对象的fn.bind()
    // e Form.create()()/getFieldDecorator()()

  // 3）高阶函数更新动态，更加具有扩展性

//2 高阶组件
    // 1）本质就是一个组件
    // 2）接受一个组件（被包装组件），返回一个新的组件（包装组件），返回的包装组件是一个高阶组件，包装组件会像被包装组件传入特定属性
    // 3）作用：扩展组件的功能
    // 4）高阶组件也是高阶函数：接受一个组件函数，返回是一个新的组件函数

//3 注意组件和标签之间的区别

//包装Form组件 生成一个新的组件 Form(Login) 生成的新的form组件去得到form对象
const WrapLogin = Form.create()(Login);
export default WrapLogin;

//1 前台表单验证
//2 收集表单输入数据

/* async和await
1.作用？
  简化promise对象的使用：不用再使用then()来指定成功或/失败的回调函数；
  以同步的编码（没有回调函数了，有回调函数就是异步处理）方式来实现异步流程。
2.哪里写async？
  await所在的最近的函数定义的左侧写async
3.哪里写await？
  在返回promise的表达式左侧写await：不想要promise，想要promise异步执行的成功的value的值。
*/
