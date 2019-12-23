import { withRouter } from 'react-router'

const RouterInfo = ({ context }) => {
	return (
		<div id="router" style={{ display: 'none' }}>
			{JSON.stringify(context)}
		</div>
	)
}
export default withRouter(RouterInfo)
