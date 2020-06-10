import React, { useContext } from 'react'
import Modal from './modal'
import { DispatchContext } from '../context';
import PrimaryButton from './primaryButton';
import SecondaryButton from './secondaryButton';

const AccountMenu = (props) => {
  const dispatchContext = useContext(DispatchContext);

  const _handleLogout = () =>{
    dispatchContext({ type: "LOGGED_OUT" });
    localStorage.removeItem('user')
    window.location.reload();
  }

  const _closeMenu = (e) => {
    if(e.target.id === 'modal-overlay'){
      props.handleAccountMenu()
    }
  }

  return (
    <Modal _onClose={_closeMenu}>
      <div className="flex flex-col">

        <PrimaryButton >Choose ClassList</PrimaryButton>
        <PrimaryButton onClick={_handleLogout}>Logout</PrimaryButton>
        <SecondaryButton onClick={props.handleAccountMenu}>Cancel</SecondaryButton>
      
      </div>
    </Modal>
  )
}

export default AccountMenu