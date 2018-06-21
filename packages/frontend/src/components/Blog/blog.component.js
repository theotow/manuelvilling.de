import Grid from '../Grid/grid.component'
import Spacer from '../Spacer/spacer.component'
import Text from '../Text/text.component'
import EntryList from '../../containers/EntryList/entrylist.container'
import Head from 'next/head'

const Blog = () => (
	<Grid.Container>
		<Head>
			<title>Manuel Villing - Webdevelopment Portfolio - Blog</title>
		</Head>
		<Grid.Row>
			<Spacer isV size="80px" />
			<Text.H2 maxWidth="320px">Posts</Text.H2>
			<Spacer isV size="45px" />
			<EntryList />
		</Grid.Row>
	</Grid.Container>
)

export default Blog
