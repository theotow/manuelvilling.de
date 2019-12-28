import gql from 'graphql-tag'

export const ENTRIES = () => gql`
  {
    entries {
      title
      pubDate
      link
    }
  }
`
