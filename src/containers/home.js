import React from "react";
import Component from "../components/home";
import Header from "../components/header";

class Home extends React.Component {
  state = {
    loginMenu: false,
    accountMenu: false,
  };

  _handleLoginMenu = () => {
    console.log('hello');
    this.setState(prevState => ({
      loginMenu: !prevState.loginMenu,
    }));
  };

  _handleAccountMenu = (e) => {
    this.setState(prevState => ({
      accountMenu: !prevState.accountMenu,
    }));
  };

  render = () => (
    <>
      <Header
        handleAccountMenu={this._handleAccountMenu}
        handleLoginMenu={this._handleLoginMenu}
      />
      <Component 
        loginMenu={this.state.loginMenu}
        accountMenu={this.state.accountMenu}
        handleAccountMenu={this._handleAccountMenu}
        handleLoginMenu={this._handleLoginMenu}
      />
    </>
  );
}

export default Home;
