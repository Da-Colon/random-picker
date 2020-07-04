import React, { useContext, useState, useEffect } from 'react'
import Modal from './views/modal'
import { DispatchContext, StateContext} from '../context';
import PrimaryButton from './views/primaryButton';
import SecondaryButton from './views/secondaryButton';
import { useHistory } from 'react-router-dom';
import LoadingModal from './views/loadingModal';

const AccountMenu = () => {
  const history = useHistory();
  const {user, submitting} = useContext(StateContext)
  const dispatch = useContext(DispatchContext);
  const [showClassList, setShowClassList] = useState(false);
  const [classLists, setClassLists] = useState([])
  const [optionValue, setOptionValue] = useState('0')

  useEffect(() => {
    getClassLists();
  },[])

  const getClassLists = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/class/list/all`, { method: 'POST' })
    const classes = await response.json();
    await setClassLists(classes)
  }

  const _handleLogout = () =>{
    dispatch({ type: "LOGGED_OUT" });
    localStorage.clear()
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

  const _setDefaultClass = (e) => {
    setOptionValue(e.target.value);
    dispatch({ type: "SUBMITTING" });
    for(let i = 0; i < classLists.length; i++){
      if(classLists[i].id.toString() === e.target.value){
        setTimeout(() => { dispatch({ type: "SUBMITTING" }) }, 2000);
        localStorage.removeItem('prefered_class');
        localStorage.setItem('prefered_class', JSON.stringify(classLists[i]))
        _handleUpdateUserPreference(classLists[i].id)
        dispatch({type: "UPDATE_USER_PREFERED_CLASS_ID", payload: classLists[i].id})
        window.location.reload();
      } else {
        dispatch({ type: "SUBMITTING" });
      }

    }
  }

  const _handleUpdateUserPreference = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/users/default/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({userId: user.id})
    })
    if(response.status === 200 && response.json()){
      const data = await response.json();
      localStorage.removeItem('user')
      localStorage.getItem('user', JSON.stringify(data))
    } else{
      return;
    }
  }

  const _handleUploadClick = () => {
    history.push('/upload')
    _handleAccountMenu();
  }

  const _handleSpinnerClick = () => {
    history.push('/spinner')
    _handleAccountMenu();
  }

  const _handleEditClick = () => {
    history.push('./edit')
    _handleAccountMenu();
  }


  return (
    <>
    {submitting && <LoadingModal>Changing Default...</LoadingModal>}
    <Modal _onClose={_closeMenu}>
      <div className="flex flex-col justify-start">
        <PrimaryButton data-cy="upload-link-button" onClick={_handleUploadClick} >Upload New ClassList</PrimaryButton>
        <div className={showClassList ? "bg-dc-dark p-1 pb-3 rounded-md flex flex-col" : "flex flex-col"}>
          <PrimaryButton data-cy="choose-class-button" onClick={() => setShowClassList(!showClassList)}>Choose Class List</PrimaryButton>
          {showClassList && (
            <select data-cy="class-list-select" value={optionValue} onChange={_setDefaultClass} className="bg-gray-600 p-1 px-2 rounded-md shadow-lg text-lg text-white border-2 border-dc-dark border-solid self-center">
              <option disabled value="0">Choose One....</option>
              {classLists.map((cohort, index) => <option key={index} value={cohort.id}>{cohort.name}</option>)}
            </select>
          )}
          </div>
        <PrimaryButton data-cy="edit-link-button" onClick={_handleEditClick} disabled={!localStorage.getItem('prefered_class') ? true : false }>Edit ClassList</PrimaryButton>
        <PrimaryButton data-cy="spinner-link-button" onClick={_handleSpinnerClick}>Spinner</PrimaryButton>
        <PrimaryButton data-cy="logout-button" onClick={_handleLogout}>Logout</PrimaryButton>
        <SecondaryButton data-cy="cancel-menu-button" onClick={_handleAccountMenu}>Cancel</SecondaryButton>
      </div>
    </Modal>
    </>
  )
}

export default AccountMenu