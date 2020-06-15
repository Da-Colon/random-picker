import React, { useContext } from 'react'
import Modal from './modal'
import { DispatchContext } from '../context';
import PrimaryButton from './primaryButton';
import SecondaryButton from './secondaryButton';
import { useHistory } from 'react-router-dom';

const AccountMenu = (props) => {
  const history = useHistory();
  const dispatch = useContext(DispatchContext);

  const _handleLogout = () =>{
    dispatch({ type: "LOGGED_OUT" });
    localStorage.removeItem('user')
    history.push('/')
    window.location.reload();
  }

  const _closeMenu = (e) => {
    if(e.target.id === 'modal-overlay'){
      dispatch({type: "ACCOUNT_MENU_TOGGLE"})
    }
  }

  const _handleAccountMenu = () => {
    dispatch({type: "ACCOUNT_MENU_TOGGLE"})
  }

  return (
    <Modal _onClose={_closeMenu}>
      <div className="flex flex-col">

        <PrimaryButton onClick={() => history.push('/upload')} >Upload ClassList</PrimaryButton>
        <PrimaryButton onClick={() => history.push('/spinner')}>Spinner</PrimaryButton>
        <PrimaryButton onClick={_handleLogout}>Logout</PrimaryButton>
        <SecondaryButton onClick={_handleAccountMenu}>Cancel</SecondaryButton>
      
      </div>
    </Modal>
  )
}

export default AccountMenu