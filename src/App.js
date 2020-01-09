import React from "react";
import Header from "./Components/Header";
import ClassList from "./Components/ClassList";
import Spinner from "./Components/Spinner";
import CalledList from "./Components/CalledList";
import {
  AppWrapper,
  LeftSideBar,
  RightSideBar,
  TopBar
} from "./Components/Styles/Containers";

import './app.css'

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <TopBar>
          <Header />
        </TopBar>
        <LeftSideBar>
          <ClassList />
        </LeftSideBar>
        <Spinner />
        <RightSideBar>
          <CalledList />
        </RightSideBar>
      </AppWrapper>
    </div>
  );
}

export default App;
