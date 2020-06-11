import React, { useContext } from "react";
import AccountMenu from "../components/accountMenu";
import Login from "../components/login";
import { StateContext } from "../context";

const Home = () => {
  const { user, loginMenu, accountMenu } = useContext(StateContext)
  return (
    <>
      {accountMenu && <AccountMenu />}
      {loginMenu && <Login />}
    </>
  );
};

export default Home;
