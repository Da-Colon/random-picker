import React, { useState, useEffect } from "react";
import classData from "./Data/jan2020Class.data.json";

//Import Components
import Header from "./Components/Header";
import ClassList from "./Components/ClassList";
import Spinner from "./Components/Spinner";
import CalledList from "./Components/CalledList";

// Import Styles
import {
  AppWrapper,
  LeftSideBar,
  RightSideBar,
  TopBar,
  MainArea
} from "./Components/Styles/Containers";
import "./app.css";

function App() {
  const [students, setStudents] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [name, setName] = useState("");
  const [styles, setStyles] = useState({})

  useEffect(() => {
    setStudents(classData.ClassList);
  }, []);

  const removeStudent = index => {
    const newArray = [...students];
    const person = newArray.splice(index, 1);
    console.log(person[0].name);
    setName(person[0].name);
    setStudents(newArray);
    addToCompleted(person);
  };

  const addToCompleted = haveCompleted => {
    const newArray = completed.concat(haveCompleted);
    setCompleted(newArray);
  };

  const randomPicker = () => {
    if (students.length) {
      const randomIndex = Math.floor(Math.random() * students.length);
      removeStudent(randomIndex);
    } else{
      setName("You're Done")
    }
  };

  return (
    <div className="App">
      <AppWrapper>
        <TopBar>
          <Header />
        </TopBar>
        <LeftSideBar>
          <ClassList students={students} removeStudent={removeStudent} />
        </LeftSideBar>
        <MainArea>
          <Spinner name={name} randomPicker={randomPicker} />
        </MainArea>
        <RightSideBar>
          <CalledList completed={completed} />
        </RightSideBar>
      </AppWrapper>
    </div>
  );
}

export default App;
