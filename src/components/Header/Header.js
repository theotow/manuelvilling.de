import React from 'react'

import Icon from '../../components/Icon/Icon'

require('./styleHeader.scss')

const Header = ({...props}) => {
  return (
    <header className={'header'}>
      <h1 className={'h1'}>Manuel Villing</h1>
      <h3 className={'h3 header__h3'}>freelance webdeveloper</h3>
      <div className={'header__social'}>
        <a className={'header__social-item'} target='_blank' href='https://www.linkedin.com/in/mvilling'>
          <Icon image={'linkedin'} />
        </a>
        <a className={'header__social-item'} target='_blank' href='https://twitter.com/theotow'>
          <Icon image={'twitter'} />
        </a>
        <a className={'header__social-item'} target='_blank' href='https://github.com/theotow'>
          <Icon image={'github'} />
        </a>
      </div>
    </header>
  )
}

Header.displayName = 'Header'

export default Header
