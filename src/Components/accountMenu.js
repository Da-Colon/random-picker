import React, { useContext, useState, useEffect } from 'react'
import Modal from './views/modal'
import { DispatchContext, StateContext } from '../context';
import PrimaryButton from './views/primaryButton';
import SecondaryButton from './views/secondaryButton';
import { useHistory } from 'react-router-dom';

const AccountMenu = (props) => {
  const history = useHistory();
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const [showClassList, setShowClassList] = useState(true);
  const [classLists, setClassLists] = useState([])
  const [optionValue, setOptionValue] = useState('0')

  useEffect(() => {
    getClassLists();
  },[])

  const getClassLists = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/class/list/all`, {
      method: 'GET'
    })
    const classes = await response.json();
    await setClassLists(classes)
  }

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

  const _setDefaultClass = (e) => {
    setOptionValue(e.target.value);
    for(let i = 0; i < classLists.length; i++){
      console.log(classLists[i].id.toString() === e.target.value)
      if(classLists[i].id.toString() === e.target.value){
        localStorage.removeItem('prefered_class');
        localStorage.setItem('prefered_class', JSON.stringify(classLists[i]))
        window.location.reload();
      }
    }
  }
  
  //Add 'Load Message Notification for successful default class list change'

  const _handleUploadClick = () => {
    history.push('/upload')
    _handleAccountMenu();
  }

  const _handleSpinnerClick = () => {
    history.push('/spinner')
    _handleAccountMenu();
  }



  return (
    <Modal _onClose={_closeMenu}>
      <div className="flex flex-col justify-start">
        <PrimaryButton onClick={_handleUploadClick} >Upload New ClassList</PrimaryButton>
        <div className={showClassList ? "bg-dc-dark p-1 pb-3 rounded-md flex flex-col" : "flex flex-col"}>
          <PrimaryButton onClick={() => setShowClassList(!showClassList)}>Choose Class List</PrimaryButton>
          {showClassList && (
            <select value={optionValue} onChange={_setDefaultClass} className="bg-gray-600 p-1 px-2 rounded-md shadow-lg text-lg text-white border border-2 border-dc-dark border-solid self-center">
              <option disabled value="0">Choose One....</option>
              {classLists.map((cohort, index) => <option key={index} value={cohort.id}>{cohort.name}</option>)}
            </select>
          )}
          </div>
        <PrimaryButton disabled={state.defaultClass === null ? true : false }>Edit ClassList</PrimaryButton>
        <PrimaryButton onClick={_handleSpinnerClick}>Spinner</PrimaryButton>
        <PrimaryButton onClick={_handleLogout}>Logout</PrimaryButton>
        <SecondaryButton onClick={_handleAccountMenu}>Cancel</SecondaryButton>
      
      </div>
    </Modal>
  )
}

export default AccountMenu