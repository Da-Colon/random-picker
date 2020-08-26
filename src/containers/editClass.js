import React from 'react'
import Component from '../components/editClass'
import { StateContext } from '../context';
import AccountMenu from '../components/accountMenu';

class EditClass extends React.Component {
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

export default EditClass
