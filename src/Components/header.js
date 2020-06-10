import React, { useContext, useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { StateContext } from "../context";

const Header = (props) => {
  const context = useContext(StateContext);
  const [user, setUser] = useState(context.user);

  useEffect(() => {
    const userData = context.user;
    setUser(userData);
  }, [context.user]);


  return (
    <div className="h-16 w-full bg-dc-dark text-white text-2xl flex justify-between">
      <img onClick={props.goHome} className="w-48 cursor-pointer" alt="Logo" src={logo} />
      {user.id && (
        <>
          <div className="self-center" onClick={props.handleAccountMenu}>
            <span className="mx-4 cursor-pointer">
              <i className="fas fa-user-circle mr-2" />
            {window.location.pathname === "/account" && <span className="arrow-down"></span>}
              {user.first_name.substr(0, 1)}. {user.last_name}
            </span>
          </div>
        </>
      )}
      {!user.id && (
        <div className="self-center">
          <span className="mx-4 text-center cursor-pointer" onClick={props.handleLoginMenu}>
            {window.location.pathname === "/login" && <span className="arrow-down"></span>}
            Login
          </span>
          |
          <span className="mx-4 text-center cursor-pointer">
            {window.location.pathname === "/register" && <span className="arrow-down"></span>}
            Register
          </span>
        </div>
      )}
    </div>
  );
}

export default Header;
