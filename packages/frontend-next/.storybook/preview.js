import { StaticRouter } from 'react-router-dom'
import Root from '../src/components/Root/root.component'


import addons, { mockChannel } from '@storybook/addons';

addons.setChannel(mockChannel());

export const decorators = [
  (Story) => (
    <StaticRouter location="/" context={{}}>
		<Root><Story/></Root>
	</StaticRouter>
  ),
];