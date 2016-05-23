import React, { PropTypes } from 'react'

require('./Image.scss')

const Image = ({...props}) => {
  const img = require('../../assets/img/customers/' + props.image + '.svg')
  return (
    <div className={'image'} style={{ 'backgroundImage': 'url(' + img + ')' }}></div>
  )
}

Image.propTypes = {
  image: PropTypes.string.isRequired
}

export default Image
