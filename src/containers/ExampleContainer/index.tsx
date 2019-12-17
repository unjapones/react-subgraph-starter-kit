import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import ExampleComponent from './ExampleComponent'

const QUERY = gql`
  query GetOptionsFactory {
    optionsFactories(first: 5) {
      id
      optionsExchangeAddress
      owner
      actions {
        id
      }
    }
  }
`

const SUBSCRIPTION = gql`
  subscription optionsFactory {
    optionsFactories(first: 5) {
      id
      optionsExchangeAddress
      owner
      actions {
        id
      }
    }
  }
`
function ExampleContainer() {
  const { subscribeToMore, ...result } = useQuery(QUERY)

  if (result.loading) {
    return <div>loading...</div>
  }

  if (result.error) {
    return <div>ERROR: There was an error trying to fetch data!</div>
  }

  return (
    <ExampleComponent
      data={result.data}
      subscribeToChanges={() =>
        subscribeToMore({
          document: SUBSCRIPTION,
          updateQuery: (prev, { subscriptionData }) => {
            return subscriptionData.data ? subscriptionData.data : prev
          },
        })
      }
    />
  )
}

export default ExampleContainer
