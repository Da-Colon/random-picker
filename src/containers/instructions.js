import React from 'react'
import Component from '../components/instructions'
import Header from '../components/header'
import { StateContext } from '../context';
import AccountMenu from '../components/accountMenu';


export default class Instructions extends React.Component {
  static contextType = StateContext;

  render = () => {
    const {accountMenu} = this.context
    return (

      <>
        <Header />
        {accountMenu && <AccountMenu />}
        <Component />

      </>
    )
    }
  }