import React, {useState, useEffect} from 'react'
import classData from './Data/Dummy.data.json'

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
  TopBar
} from "./Components/Styles/Containers";
import './app.css'

function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    setStudents(classData.ClassList) 
  },[])
  

  const removeStudent = (index) => {
    const newArray = [...students]
    newArray.splice(index, 1)
    setStudents(newArray)
  }

  return (
    <div className="App">
      <AppWrapper>
        <TopBar>
          <Header />
        </TopBar>
        <LeftSideBar>
          <ClassList students={students} removeStudent={removeStudent} />
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
