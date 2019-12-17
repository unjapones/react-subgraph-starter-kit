import React, { useEffect } from 'react'
import stringify from 'json-stringify-pretty-compact'

import { GetOptionsFactory_optionsFactories_actions } from '../../types/generatedGQL'

type Props = {
  data: GetOptionsFactory_optionsFactories_actions
  subscribeToChanges: () => void
}

function ExampleComponent(props: Props) {
  const { data, subscribeToChanges } = props

  useEffect(() => {
    subscribeToChanges()
  })

  return (
    <div>
      <pre>{stringify(data)}</pre>
    </div>
  )
}

export default ExampleComponent
