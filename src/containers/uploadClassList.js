import React from 'react'
import Component from '../components/uploadClassList'
import { StateContext } from '../context';
import Header from '../components/header';
import AccountMenu from '../components/accountMenu';

class UploadClassList extends React.Component {
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

export default UploadClassList
