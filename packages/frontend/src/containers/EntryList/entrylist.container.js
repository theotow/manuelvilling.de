import { Query } from 'react-apollo'
import { ENTRIES } from '../../queries/entries.query'
import Entry from '../../components/Entry/entry.component'
import Text from '../../components/Text/text.component'
import Loader from '../../components/Loader/loader.component'

const EntryList = () => {
	return (
		<Query query={ENTRIES()}>
			{({ loading, error, data }) => {
				if (loading) return <Loader />
				if (error) return <Text.P>Error :(</Text.P>
				return data.entries.map(({ title, pubDate, link }) => (
					<Entry
						key={title}
						title={title}
						date={pubDate}
						link={link}
					/>
				))
			}}
		</Query>
	)
}

export default EntryList
