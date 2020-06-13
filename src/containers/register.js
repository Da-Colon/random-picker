import React from 'react'
import Header from '../components/header'
import Component from '../components/register'
import AccountMenu from "../components/accountMenu";
import Login from "../components/login";
import { StateContext} from "../context";

class Register extends React.Component {
  static contextType = StateContext;

  render = () => {
    const {accountMenu, loginMenu} = this.context
    return (

      <>
        <Header />
        {accountMenu && <AccountMenu />}
        {loginMenu && <Login />}
        <Component />

      </>
      )
  }
}



export default Register
