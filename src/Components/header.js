import React, { useContext, useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import { StateContext } from "../context";

export default function Header() {
  const history = useHistory();
  const context = useContext(StateContext);
  const [user, setUser] = useState(context.user);

  useEffect(() => {
    const userData = context.user;
    setUser(userData);
  }, [context.user]);

  const _onClickLogin = () => {
    history.push("/login");
  };

  return (
    <div className="h-16 w-full bg-dc-dark text-white text-2xl flex justify-between">
      <img className="w-48" alt="Logo" src={logo} />
      {user.id && (
        <div className="self-center">
          <span className="mx-4">
            {user.first_name.substr(0, 1)}. {user.last_name}
          </span>
        </div>
      )}
      {!user.id && (
        <div className="self-center">
          <span className="mx-4 text-center" onClick={_onClickLogin}>
            {window.location.pathname === "/login" && (
              <span className="arrow-down"></span>
            )}
            Login
          </span>
          |
          <span className="mx-4">
            {window.location.pathname === "/register" && (
              <span className="arrow-down"></span>
            )}
            Register
          </span>
        </div>
      )}
    </div>
  );
}
