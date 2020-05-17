import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'

const info = {
  title: '张三的驿站',
  description: '当我鄙夷一张丑恶的嘴脸时，却不知那正是自己面具中的一副。',
  author: 'Zale'
};

class Hello extends React.Component {
  render() {
    return <div>
      <div className="container">
        <div className="vertical">
            <div className="main-header-content inner">
                <h1 className="page-title" style={{ fontFamily: 'Playball'}} id="homeTopTitle">{this.props.info.title}</h1>
                <h2 className="page-description" id="hitokoto">{this.props.info.description}</h2>
                <h3 className="page-author" id="hitokotoAuthor">{this.props.info.author}</h3>
            </div>
        </div>
      </div>
    </div>
  }
}

ReactDOM.render(
  <Hello info={info} />,
  document.getElementById('app')
)