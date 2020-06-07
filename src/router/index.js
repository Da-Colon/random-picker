import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../containers/home'

export default function index() {
  return (
    <Router>
      <Route path="/" component={Home} />
      {/* <Route path="/spinner" component={Spinner} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} /> */}

    </Router>
  )
}
