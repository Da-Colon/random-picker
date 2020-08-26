import React from 'react'
import Component from '../components/register'
import Login from "../components/login";
import { StateContext} from "../context";

class Register extends React.Component {
  static contextType = StateContext;

  render = () => {
    const {loginMenu} = this.context
    return (

      <>
        {loginMenu && <Login />}
        <Component />

      </>
      )
  }
}



export default Register
