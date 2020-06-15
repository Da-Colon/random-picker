import React, { useState, useEffect, useContext } from "react";
import classnames from "classnames";
import PrimaryButton from "./primaryButton";
import "./Styles/spinner.css";
import { StateContext } from "../context";
import XButton from "./xButton";

const baseClassNameSpinner = "text-4xl";
const baseClassNameContainer =
  "w-72 h-72 rounded-full flex items-center justify-center border border-solid border-8 ";
const animateSpinner = "animate";
const finishedBorder = baseClassNameContainer + "tada";

export default function Spinner() {
  const state = useContext(StateContext);
  const [students, setStudents] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [finished, setfinished] = useState(false);
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState([]);
  const [showStudents, setShowStudents] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    setStudents(state.defaultClass);
  }, [state.defaultClass]);

  const spinNames = () => {
    const randomIndex = Math.floor(Math.random() * students.length);
    setName(students[randomIndex]);
  };

  const addToCompleted = (studentIndex) => {
    const newArr = [...completed];
    newArr.push(students[studentIndex]);
    setCompleted(newArr);
  };

  const removeStudent = (removedStudent) => {
    const newArr = [...students];
    setName(students[removedStudent]);
    addToCompleted(removedStudent);
    setStudents(newArr.filter((value, index) => index !== removedStudent));
  };

  const randomPicker = () => {
    setfinished(false);
    if (students.length) {
      const randomIndex = Math.floor(Math.random() * students.length);
      setAnimate(true);
      const spin = setInterval(spinNames, 100);
      setTimeout(() => {
        clearInterval(spin);
        setAnimate(false);
        removeStudent(randomIndex);
        setfinished(true);
      }, 4000);
    } else {
      setName("You're Done");
    }
  };

  return (
    <div className="h-full w-full max-w-screen-xxl flex items-center justify-between pt-12">
      <div className="w-48 h-full border-r border-solid flex flex-col p-4">
        <PrimaryButton
          className=""
          onClick={() => setShowStudents(!showStudents)}
        >
          Waiting
        </PrimaryButton>
        {showStudents && (
          <div className="h-64 no-scroll-bar-overflow">
            {students.map((student, index) => (
              <div className="flex justify-between p-1 w-full">
                <span>{student}</span>
                <XButton onClick={() => removeStudent(index)} />
              </div>
            ))}
          </div>
        )}
        <PrimaryButton
          className=""
          onClick={() => setShowCompleted(!showCompleted)}
        >
          Completed
        </PrimaryButton>
        {showCompleted && (
          <div className="h-64 no-scroll-bar-overflow">
            {completed.map((student) => (
              <div className="flex justify-between p-1 w-full">
                <span className="font-bold">{student}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <PrimaryButton onClick={randomPicker}>Random Student</PrimaryButton>
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div
          className={
            !finished
              ? classnames(baseClassNameContainer)
              : classnames(finishedBorder)
          }
        >
          <span
            className={
              !animate
                ? classnames(baseClassNameSpinner)
                : classnames(animateSpinner)
            }
          >
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}
