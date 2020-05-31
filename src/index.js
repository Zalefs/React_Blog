import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import './icons'
import './asset/base.less'
import './index.less'
import Header from './components/index/Header/index'
import Footer from './components/index/Footer/index'



const info = {
  title: '张三的驿站',
  description: '我欲乘风向北行，雪落轩辕大如席；<br />我欲借船向东游，绰约仙子迎风立；<br />我欲踏云千万里，庙堂龙吟奈我何；<br />昆仑之巅沐日光，沧海绝境见青山；<br />长风万里燕归来，不见天涯人不回。',
  author: '《少年歌行》'
};

class Content extends React.Component {
  render() {
    return (
      <div className="content edition-heart">
        {/*留言板*/}
        <div className="message-board">
          <form>
            <div className="form-item">
              <span className="form-label">昵称：</span>
              <input type="text"/>
            </div>
            <div className="form-item">
              <span className="form-label">联系邮箱：</span>
              <input type="email" name="" id=""/>
            </div>
            <div className="form-item">
              <span className="form-label">留言内容：</span>
              <textarea
                cols="30"
                rows="10"
              />
            </div>
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