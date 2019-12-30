import React from 'react'
const wrapper = (file, name) => ({ height }) => (
	<img src={file} height={height} alt={name} />
)

const Header = wrapper(require('./assets/header_logo.svg'), 'Header')
const Github = wrapper(require('./assets/github.svg'), 'Github')
const Twitter = wrapper(require('./assets/twitter.svg'), 'Twitter')
const Burger = wrapper(require('./assets/burger.svg'), 'Burger')
const ThumbsUp = wrapper(require('./assets/1f44d.png'), 'Thumbs Up')
const ThumbsDown = wrapper(require('./assets/1f44e.png'), 'Thumbs Down')
const Heart = wrapper(require('./assets/heart.svg'), 'Heart')

export default { Header, Github, Twitter, Burger, ThumbsUp, ThumbsDown, Heart }
