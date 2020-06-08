import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../components/home'
import Login from '../components/login'
import accountMenu from '../components/accountMenu'

export default function AppRouter() {
  return (
    <div className="h-screen overflow-hidden">

    <Router>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/account" component={accountMenu} />
      {/* <Route path="/spinner" component={Spinner} /> */}
      {/* <Route path="/signup" component={SignUp} /> */}

    </Router>
    </div>
  )
}
