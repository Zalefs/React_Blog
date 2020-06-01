import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import './icons'
import '@/asset/base.less'
import './index.less'
import Header from './components/index/Header/index'
import Footer from './components/index/Footer/index'



const info = {
  title: '张三的驿站',
  description: '我欲乘风向北行，雪落轩辕大如席；<br />我欲借船向东游，绰约仙子迎风立；<br />我欲踏云千万里，庙堂龙吟奈我何；<br />昆仑之巅沐日光，沧海绝境见青山；<br />长风万里燕归来，不见天涯人不回。',
  author: '《少年歌行》'
};

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nickName: '',
      email: '',
      content: '',
      checked: false
    }
  }

  handleChange = (e) => {
    let name = e.target.name
    if (name === 'checked') {
      this.state.checked = !this.state.checked
    } else {
      this.state[name] = e.target.value
    }
    this.setState(this.state)
  }

  submit = () => {
    if (!this.state.checked) {
      alert("你要同意嫁给我")
      return false
    }
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (this.state.nickName && this.state.email && this.state.content) {
      if (!reg.test(this.state.email)) {
        alert("邮箱格式不正确")
      } else {
        alert("提交成功")
        console.log("昵称：" + this.state.nickName)
        console.log("邮箱：" + this.state.email)
        console.log("留言：" + this.state.content)
        this.reset()
      }
    } else {
      alert("内容不全，无法提交！")
    }
  }

  reset = () => {
    this.setState({
      nickName: '',
      email: '',
      content: '',
      checked: false
    })
  }

  render() {
    return (
      <div className="content edition-heart">
        {/*留言板*/}
        <div className="message-board">
          <form>
            <div className="form-item">
              <span className="form-label">昵称：</span>
              <input type="text" value={this.state.nickName} name="nickName" onChange={this.handleChange} />
            </div>
            <div className="form-item">
              <span className="form-label">联系邮箱：</span>
              <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
            <div className="form-item">
              <span className="form-label">留言内容：</span>
              <textarea
                cols="30"
                rows="10"
                value={this.state.content}
                name="content"
                onChange={this.handleChange}
              />
            </div>
            <div className="check-box">
              <input type="checkbox" name="checked" checked={this.state.checked} onChange={this.handleChange} />
              <span>Can you marry me?</span>
            </div>
            <button type="button" className="button" onClick={this.submit}>提交</button>
            <button type="button" className="button" onClick={this.reset}>重置</button>
          </form>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <Header info={info} />
    <Content />
    <Footer />
  </div>,
  document.getElementById('app')
)