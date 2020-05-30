import react from 'react'
import PropTypes from 'prop-types'
import styles from './style.less'
console.log(styles)

const  SvgIcon = props => {
  const { iconClass, fill }  = props

  return (
    <i aria-hidden="true" className="anticon">
      <svg className="svg-class icon">
        <use xlinkHref={"#icon-" + iconClass} fill={fill} />
      </svg>
    </i>
  )
}

SvgIcon.propTypes = {
  // svg名字
  iconClass: PropTypes.string.isRequired,
  // 填充颜色
  fill: PropTypes.string
}

SvgIcon.defaultProps = {
  fill: 'currentColor'
}

export default SvgIcon