import React from "react";
import Component from "../components/home";
import Header from "../components/header";

class Home extends React.Component {
  

  render = () => (
    <>
      <Header />
      <Component />
    </>
  );
}

export default Home;
