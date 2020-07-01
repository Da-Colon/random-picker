import React, { useContext, useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import { StateContext } from "../context";
import { DispatchContext } from "../context"
import logo from "../assets/images/logo.png";

const Header = () => {
  const history = useHistory();
  const dispatch = useContext(DispatchContext)
  const state = useContext(StateContext);
  const [user, setUser] = useState(state.user);

  useEffect(() => {
    const userData = state.user;
    setUser(userData);
  }, [state.user]);

  const _goHome = () => {
    history.push('/')
  }

  return (
    <div className="h-16 w-full fixed bg-dc-dark text-white text-xl flex justify-between">
      <img data-cy="logo" onClick={_goHome} className="w-48 cursor-pointer" alt="Logo" src={logo} />
      {user.id && (
        <>
          <div className="self-center" onClick={() => dispatch({type: "ACCOUNT_MENU_TOGGLE"})}>
            <span data-cy="account-menu-click" className="mx-2 cursor-pointer">
              <i className="fas fa-user-circle mr-1" />
            {state.accountMenu && <span className="arrow-down"></span>}
              {user.first_name.substr(0, 1)}. {user.last_name}
            </span>
          </div>
        </>
      )}
      {!user.id && (
        <div className="self-center">
          <span data-cy="login" className="mx-4 text-center cursor-pointer" onClick={() => dispatch({type: "LOGIN_MENU_TOGGLE"})}>
            Login
          </span>
          |
          <span data-cy="register" className="mx-4 text-center cursor-pointer" onClick={() => history.push("/register")}>
            Register
          </span>
        </div>
      )}
    </div>
  );
}

export default Header;
