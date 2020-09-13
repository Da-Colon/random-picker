import React, { useContext, useState, useEffect, useCallback} from 'react'
import AccountMenu from '../components/Header/accountMenu'
import StartMenu from '../components/Header/starterMenu'
import { useHistory } from 'react-router-dom'
import { StateContext } from "../context";

const HeaderContainer = () => {
  const history = useHistory();
  const state = useContext(StateContext);
  const [user, setUser] = useState(state.user);
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => _checkUserState());

  useEffect(() => _checkLoggedIn())

  const _checkUserState = useCallback(() => {
    const userData = state.user;
    setUser(userData);
  }, [state.user])

  const _checkLoggedIn = useCallback(() => {
    if(user.id === null){
      setLoggedIn(false)
    }
    if(user.id !== null){
      setLoggedIn(true)
    }
  }, [user])

  const _handleLinkHome = () => {
    history.push('/')
  }

  const _handleLinkRegister = () => {
    history.push('/register')
  }

  const _handleLinkLogin = () => {
    history.push('/login')
  }

  const Menu = () => {
    if(loggedIn){
      return <AccountMenu user={user} />
    }
    return <StartMenu handleLinkRegister={_handleLinkRegister} handleLinkLogin={_handleLinkLogin} />
  }

  return (
    <div className="bg-dc-dark absolute w-full top-0 flex justify-between">
      <p className="text-white w-fit p-2 flex justify-center items-center trans cursor-pointer" onClick={_handleLinkHome}>
        <span className="text-2xl mx-2 font-serif tracking-widest font-bold">Who's Next</span>
        <i className="fas fa-question text-xs" />
      </p>
      <Menu />
    </div>
  )
}

export default HeaderContainer;