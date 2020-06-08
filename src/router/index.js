import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../containers/home'
import Login from '../components/login'

export default function AppRouter() {
  return (
    <Router>
      <Route path="/" component={Home} />
      {/* <Route path="/spinner" component={Spinner} /> */}
      {/* <Route path="/signup" component={SignUp} /> */}
      <Route path="/login" component={Login} />

    </Router>
  )
}
