import React from "react";
import Component from "../components/home";
import Header from "../components/header";
import { StateContext } from "../context";
import AccountMenu from "../components/accountMenu";
import Login from "../components/login";


class Home extends React.Component {
  static contextType = StateContext;

  render = () => {
    const { accountMenu, loginMenu } = this.context;
    return (
      <>
        <Header />
        {accountMenu && <AccountMenu />}
        {loginMenu && <Login />}
        <Component />
      </>
    );
  };
}

export default Home;
