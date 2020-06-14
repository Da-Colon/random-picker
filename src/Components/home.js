import React, { useContext } from "react";
import AccountMenu from "../components/accountMenu";
import Login from "../components/login";
import { StateContext } from "../context";

const Home = () => {
  const { loginMenu, accountMenu, user } = useContext(StateContext)
  return (
    <>
      {accountMenu && <AccountMenu />}
      {loginMenu && <Login />}
      {user.id && (
        <>
        <div>Go To Spinner</div>
        <div>Choose Class LIST</div>
        <div>GIF OF SPINNER IN ACTION</div>
        </>
      )}
    </>
  );
};

export default Home;
