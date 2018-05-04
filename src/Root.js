import React from 'react'
import { ProviderRedux } from './services/redux'
// Routes
import { Page as HomeRoute } from './scenes/Home'

const Root = () => (
  <ProviderRedux>
    <HomeRoute />
  </ProviderRedux>
)

export default Root
