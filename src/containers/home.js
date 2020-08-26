import React from "react";
import Component from "../components/home";
import { StateContext } from "../context";


class Home extends React.Component {
  static contextType = StateContext;

  render = () => {
    return (
      <>
        <Component />
      </>
    );
  };
}

export default Home;
