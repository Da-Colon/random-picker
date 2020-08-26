import React from 'react'
import Component from '../components/spinner'
import { StateContext } from '../context';
import AccountMenu from '../components/accountMenu';


export default class Spinner extends React.Component {
  static contextType = StateContext;

  render = () => {
    const {accountMenu} = this.context
    return (

      <>
        {accountMenu && <AccountMenu />}
        <Component />

      </>
    )
    }
  }