import gql from 'graphql-tag'

export const POKE = gql`
	mutation poke($msg: String!) {
		poke(msg: $msg) {
			success
		}
	}
`
