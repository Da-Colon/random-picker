import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../containers/home'
import Spinner from '../containers/spinner'
import Register from '../containers/register'
import UploadClassList from '../containers/uploadClassList'

export default function AppRouter() {
  return (
    <div className="h-screen flex justify-center">

    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/spinner" component={Spinner} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/upload" component={UploadClassList} exact />
    </Router>
    </div>
  )
}
