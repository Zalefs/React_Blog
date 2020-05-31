import react from 'react'
import SvgIcon from '../../SvgIcon'
import './index.less'

class Header extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true
    }
  }

  componentDidMount() {
    //  监听屏幕滚动
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    // 注销监听屏幕滚动事件
    window.removeEventListener('scroll', this.handleScroll)
  }

  // 滚动事件触发做相应处理
  handleScroll = (event) => {
    // 获取屏幕可见区域高度
    let clientHeight = document.body.clientHeight
    // 滚动的高度
    const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) 
                      || window.pageYOffset
                      || (event.srcElement ? event.srcElement.body.scrollTop : 0);

    if (scrollTop > 0 && this.state.flag) {
      this.state.flag = false
      this.toContent()
    }
  }

  toContent = () => {
    let scrollDown = document.getElementsByClassName('scroll-down')[0]
    let container = document.getElementsByClassName('container')[0]
    container.style.height = '0'
    scrollDown.style.display = "none"
  }

  render() {
    return <div>
      <div className="container">
        <div className="vertical">
          <div className="main-header-content inner">
            <h1 className="page-title" id="homeTopTitle">{this.props.info.title}</h1>
            <h2 className="page-description" id="hitokoto" dangerouslySetInnerHTML={{__html:this.props.info.description}} />
            <h3 className="page-author" id="hitokotoAuthor">{this.props.info.author}</h3>
          </div>
        </div>
        <div className="scroll-down" onClick={this.toContent}>
          <SvgIcon iconClass="scrollDown" />
        </div>
      </div>
    </div>
  }
}

export default Header