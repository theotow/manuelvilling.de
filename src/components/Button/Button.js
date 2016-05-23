import React, { PropTypes } from 'react'

require('./Button.scss')

const Button = ({...props}) => {
  return (
    <div className={'button'}><span>{props.text}</span></div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button
