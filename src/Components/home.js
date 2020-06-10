import React from "react";
import AccountMenu from "../components/accountMenu";
import Login from "../components/login";

const Home = (props) => {
  return (
    <>
      {props.accountMenu && <AccountMenu handleAccountMenu={props.handleAccountMenu} />}
      {props.loginMenu && <Login handleLoginMenu={props.handleLoginMenu}/>}
    </>
  );
};

export default Home;
