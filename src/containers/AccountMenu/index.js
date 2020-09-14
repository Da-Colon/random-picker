import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Menu from '../../components/AccountMenu'
import Modal from '../../components/views/modal'
import { DispatchContext, StateContext} from '../../context';
import { searchClassList } from '../../utils';

const AccountMenu = () => {
  const history = useHistory();
  const {user} = useContext(StateContext)
  const dispatch = useContext(DispatchContext);
  const [showClassList, setShowClassList] = useState(false);
  const [listOfClasses, setListOfClasses] = useState([])
  const [optionValue, setOptionValue] = useState('0')

  useEffect(() => {
    getClassLists();
  },[])

  const getClassLists = async () => {
    try{
      const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/class/list/all`, { method: 'POST' })
      const classes = await response.json();
      setListOfClasses(classes)
    } catch (error) {
      console.error(error)
    }
  }

  const _handleLogout = () =>{
    dispatch({ type: "LOGGED_OUT" });
    localStorage.clear()
    history.push('/')
    window.location.reload();
  }

  const _setDefaultClass = (e) => {
    const value = e.target.value
    setOptionValue(value);
    let classObject = searchClassList(value, listOfClasses);
    try {
      localStorage.removeItem('prefered_class');
      localStorage.setItem('prefered_class', JSON.stringify(classObject))
      _handleUpdateUserPreference(classObject.id)
      dispatch({type: "UPDATE_USER_PREFERED_CLASS_ID", payload: classObject.id})
    } catch (error) {
      console.error(error)
    } finally {
      history.push('/')
      window.location.reload()
    }
  }

  const _handleUpdateUserPreference = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/users/default/${id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({userId: user.id})
      })
      const data = await response.json();
      localStorage.removeItem('user')
      localStorage.getItem('user', JSON.stringify(data))
    } catch (error) {
      console.error(error)
    }
  }

  const _handleUploadClick = () => {
    history.push('/upload')
  }

  const _handleSpinnerClick = () => {
    history.push('/spinner')
  }

  const _handleEditClick = () => {
    console.log("hello")
    history.push('/edit')
  }

  const _handleShowClassList = () => {
    setShowClassList(!showClassList)
  }

  const _handleCancel = () => {
    history.goBack()

  }

  return (
    <Modal>
      <Menu
        optionValue={optionValue}
        listOfClasses={listOfClasses}
        showClassList={showClassList}
        setDefaultClass={_setDefaultClass}
        handleClassList={_handleShowClassList}
        handleSpinnerClick={_handleSpinnerClick} 
        handleUploadClick={_handleUploadClick} 
        handleEditClick={_handleEditClick} 
        handleLogout={_handleLogout}
        handleCancel={_handleCancel} />
    </Modal>
  )
}

export default AccountMenu