import React, { useState, useEffect, useContext } from "react";
import classnames from 'classnames'
import PrimaryButton from "./primaryButton";
import "./Styles/spinner.css";
import { StateContext } from "../context";

const baseClassNameSpinner = "text-4xl"
const baseClassNameContainer = "w-72 h-72 rounded-full flex items-center justify-center border border-solid border-8 "
const animateSpinner = "animate"
const finishedBorder = baseClassNameContainer + "tada"


export default function Spinner() {
  const state = useContext(StateContext)
  const [students, setStudents] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [finished, setfinished] = useState(false);
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    setStudents(state.defaultClass)
  },[])

  const spinNames = () => {
    const randomIndex = Math.floor(Math.random() * students.length);
    setName(students[randomIndex]);
  };

  const addToCompleted = (haveCompleted) => {
    // const newArray = completed.concat(haveCompleted);
    // setCompleted(newArray);
  };

  const removeStudent = (index) => {
    const newArray = [...students];
    const person = newArray.splice(index, 1);
    setName(person);
    setStudents(newArray);
    addToCompleted(person);
  };

  const randomPicker = () => {
    setfinished(false);
    if (students.length) {
      const randomIndex = Math.floor(Math.random() * students.length);
      setAnimate(true);
      const spin = setInterval(spinNames, 100);
      setTimeout(() => {
        removeStudent(randomIndex);
        clearInterval(spin);
        setCompleted(true);
        setAnimate(false);
        setfinished(true)
      }, 4000);
    } else {
      setName("You're Done");
    }
  };

  return (
    <div className="h-full w-full max-w-screen-xl flex items-center justify-between">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className={!finished ? classnames(baseClassNameContainer) : classnames(finishedBorder)}>
          <span className={!animate ? classnames(baseClassNameSpinner) : classnames(animateSpinner)}>{name}</span>
        </div>
        <div>
          <PrimaryButton onClick={randomPicker}>
            Show Student List
          </PrimaryButton>
          <PrimaryButton onClick={randomPicker}>Random Student</PrimaryButton>
          <PrimaryButton onClick={randomPicker}>
            Show Completed List
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
