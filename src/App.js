import React from 'react'
import Router from './router'
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import ContextProvider from './context'

const App = () => {
  return (
  <ContextProvider>
      <Router />
  </ContextProvider>
  )
}

export default App;
