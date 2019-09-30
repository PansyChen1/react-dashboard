import React, {Component} from 'react';
import { Form, Icon, Input, Button} from 'antd';
import './Login.less';
import logo from "../../assets/images/login-logo.jpg";

const Item = Form.Item;//不能写在import之前

//登陆的路由组件
class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    // 阻止事件的默认行为
    event.preventDefault();
    // 得到form对象
    const form = this.props.form;
    // 获取表单项输入的数据
    const values = form.getFieldsValue();
    console.log("values", values)
  };

  render () {
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
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                />,
            )}
          </Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
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