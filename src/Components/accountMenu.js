import React, { useContext } from 'react'
import Modal from './modal'
import {useHistory} from 'react-router-dom'
import { DispatchContext } from '../context';
import PrimaryButton from './primaryButton';
import SecondaryButton from './secondaryButton';

const AccountMenu = () => {
  const history = useHistory();
  const dispatchContext = useContext(DispatchContext);

  const _handleLogout = () =>{
    dispatchContext({ type: "LOGGED_OUT" });
    localStorage.removeItem('user')
    history.push('/')
    window.location.reload();
  }

  const _closeMenu = (e) => {
    if(e.target.id === 'modal-overlay'){
      history.push('/')
    }
  }

  const _onCancel = () => {
    history.push('/')
  }
  return (
    <Modal _onClose={_closeMenu}>
      <div className="flex flex-col">

        <PrimaryButton >Choose ClassList</PrimaryButton>
        <PrimaryButton onClick={_handleLogout}>Logout</PrimaryButton>
        <SecondaryButton onClick={_onCancel}>Cancel</SecondaryButton>
      
      </div>
    </Modal>
  )
}

export default AccountMenu