import React, { useContext } from 'react'
import Modal from './modal'
import { DispatchContext } from '../context';
import PrimaryButton from './primaryButton';
import SecondaryButton from './secondaryButton';

const AccountMenu = (props) => {
  const dispatch = useContext(DispatchContext);

  const _handleLogout = () =>{
    dispatch({ type: "LOGGED_OUT" });
    localStorage.removeItem('user')
    window.location.reload();
  }

  const _closeMenu = (e) => {
    if(e.target.id === 'modal-overlay'){
      dispatch({type: "ACCOUNT_MENU_TOGGLE"})
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