import React, { useState, useEffect } from "react";
import classData from "./Data/jan2020Class.data.json";

//Import Components
import Header from "./Components/Header";
import { ClassList } from "./Components/ClassList";
import Spinner from "./Components/Spinner";
import { CalledList } from "./Components/CalledList";

// Import Styles
import {
  AppWrapper,
  LeftSideBar,
  RightSideBar,
  TopBar,
  MainArea,
  Overlay
} from "./Components/Styles/Containers";

import "./app.css";
import BottomButtons from "./Components/BottomButtons.jsx";

// Constants
const mobileBreakpoint = 728

function App() {

  const [students, setStudents] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [name, setName] = useState("");
  const [styles, setStyles] = useState("");
  const [border, setBorder] = useState("");
  const [showClassList, setShowClassList] = useState(false);
  const [clickShowClass, setClickShowClass] = useState(false);
  const [showCalledList, setShowCalledList] = useState(false);
  const [clickShowCalled, setClickShowCalled] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    setStudents(classData.ClassList);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
  });

  useEffect(() => {
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  const handleClose = e => {
    if (e.target.id === "overlay") {
      setClickShowCalled(false);
      setClickShowClass(false);
      setOverlay(false);
    } else {
      return;
    }
  };

  const checkWindowSize = () => {
    if (window.innerWidth <= mobileBreakpoint) {
      setShowCalledList(false);
      setShowClassList(false);
      setShowButtons(true);
    } else {
      setShowCalledList(true);
      setShowClassList(true);
      setShowButtons(false);
    }
  };

  const removeStudent = index => {
    const newArray = [...students];
    const person = newArray.splice(index, 1);
    setName(person[0].name);
    setStudents(newArray);
    addToCompleted(person);
  };

  const addToCompleted = haveCompleted => {
    const newArray = completed.concat(haveCompleted);
    setCompleted(newArray);
  };
  const spinNames = () => {
    const randomIndex = Math.floor(Math.random() * students.length);
    setName(students[randomIndex].name);
  };

  const randomPicker = () => {
    if (students.length) {
      const randomIndex = Math.floor(Math.random() * students.length);
      setStyles("animate");
      setBorder("nothing");
      const spin = setInterval(spinNames, 100);
      setTimeout(() => {
        removeStudent(randomIndex);
        clearInterval(spin);
        setBorder("tada");
        setStyles("not-animated");
      }, 4000);
    } else {
      setName("You're Done");
    }
  };

  // Functions to toggle button clicks
  const handleClickCalled = () => {
    setClickShowCalled(!clickShowCalled);
    setClickShowClass(false);
    setOverlay(true);
  };

  const handleClickClass = () => {
    setClickShowClass(!clickShowClass);
    setClickShowCalled(false);
    setOverlay(true);
  };

  return (
    <div className="App">
      <AppWrapper>
        {overlay ? <Overlay id="overlay" /> : ""}
        <TopBar>
          <Header />
        </TopBar>
        {showClassList || clickShowClass || window.innerWidth >= mobileBreakpoint ? (
          <LeftSideBar>
            <ClassList students={students} removeStudent={removeStudent} />
          </LeftSideBar>
        ) : (
          ""
        )}
        <MainArea>
          <Spinner
            border={border}
            styles={styles}
            name={name}
            randomPicker={randomPicker}
          />
        </MainArea>
        {showCalledList || clickShowCalled || window.innerWidth >= mobileBreakpoint ? (
          <RightSideBar>
            <CalledList completed={completed} />
          </RightSideBar>
        ) : (
          ""
        )}
        {showButtons || window.innerWidth < mobileBreakpoint ? (
          <BottomButtons
            handleClickClass={handleClickClass}
            handleClickCalled={handleClickCalled}
          />
        ) : (
          ""
        )}
      </AppWrapper>
    </div>
  );
}

export default App;
