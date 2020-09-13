import React from 'react'
import Component from '../components/register'
import { StateContext} from "../context";

class Register extends React.Component {
  static contextType = StateContext;

  render = () => {
    return (

      <>
        <Component />

      </>
      )
  }
}



export default Register
