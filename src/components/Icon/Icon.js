import React, { PropTypes } from 'react'

require('./Icon.scss')

const Icon = ({...props}) => {
  const img = require('../../assets/img/' + props.image + '.svg')
  return (
    <div className={'icon'} style={{ 'backgroundImage': 'url(' + img + ')' }}></div>
  )
}

Icon.propTypes = {
  image: PropTypes.string.isRequired
}

export default Icon
