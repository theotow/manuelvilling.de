const wrapper = (file, name) => ({ height }) => (
	<img src={file} height={height} alt={name} />
)

const Header = wrapper(require('./header_logo.svg'), 'Header')
const Github = wrapper(require('./github.svg'), 'Github')
const Twitter = wrapper(require('./twitter.svg'), 'Twitter')
const Burger = wrapper(require('./burger.svg'), 'Burger')
const ThumbsUp = wrapper(require('./1f44d.png'), 'Thumbs Up')
const ThumbsDown = wrapper(require('./1f44e.png'), 'Thumbs Down')
const Heart = wrapper(require('./heart.svg'), 'Heart')

export default { Header, Github, Twitter, Burger, ThumbsUp, ThumbsDown, Heart }
