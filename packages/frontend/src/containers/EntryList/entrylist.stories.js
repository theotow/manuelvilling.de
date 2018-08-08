import { storiesOf } from '@storybook/react'
import { StaticRouter } from 'react-router-dom'
import Root from '../../components/Root/root.component'
import EntryList from './entrylist.container'
import { MockedProvider } from 'react-apollo/test-utils'
import { ENTRIES } from '../../queries/entries.query'

const mocks = [
	{
		request: { query: ENTRIES() },
		result: {
			data: {
				entries: [
					{
						__typename: 'BlogEntry',
						title: 'test1',
						pubDate: 'date1',
						link: 'http://google.com'
					},
					{
						__typename: 'BlogEntry',
						title: 'test2',
						pubDate: 'date2',
						link: 'http://google.com'
					}
				]
			}
		}
	}
]

storiesOf('EntryList', module).add('default', () => (
	<StaticRouter location="/" context={{}}>
		<MockedProvider mocks={mocks}>
			<Root>{() => <EntryList />}</Root>
		</MockedProvider>
	</StaticRouter>
))
