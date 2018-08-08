import { shallow, mount } from 'enzyme'
import App from './index'

it('renders without crashing shallow', () => {
	shallow(<App />)
})

it('renders without crashing mount', () => {
	mount(<App />).unmount()
})
