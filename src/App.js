import React from 'react'
import Router from './router'
import ContextProvider from './context'

const App = () => (
    <ContextProvider>
      <Router />
    </ContextProvider>
  )


export default App;
