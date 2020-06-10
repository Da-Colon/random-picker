import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../containers/home'

export default function AppRouter() {
  return (
    <div className="h-screen overflow-hidden">

    <Router>
      <Route path="/" component={Home} />
      {/* <Route path="/spinner" component={Spinner} /> */}
      {/* <Route path="/signup" component={SignUp} /> */}

    </Router>
    </div>
  )
}
