import React from 'react'
import Component from '../components/uploadClassList'
import { StateContext } from '../context';
import AccountMenu from '../components/accountMenu';

class UploadClassList extends React.Component {
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

export default UploadClassList
