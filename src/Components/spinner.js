import React, { useState, useEffect, useContext } from "react";
import classnames from "classnames";
import PrimaryButton from "./views/primaryButton";
import { StateContext } from "../context";
import XButton from "./views/xButton";

const baseClassNameSpinner = "text-4xl";
const baseClassNameContainer =
  "h-72 w-72 rounded-full flex items-center justify-center";
const animateSpinner = "animate";
const finishedBorder = "tada";

export default function Spinner() {
  const state = useContext(StateContext);
  const [students, setStudents] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [name, setName] = useState("");
  const [animate, setAnimate] = useState(false);
  const [finished, setfinished] = useState(false);
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
    setfinished(true);
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
    <div className="h-full w-full flex items-center pt-12 flex-wrap">
      <div className="w-48 h-full border-r border-solid flex flex-col p-4 bg-dc-dark text-white">
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
          <div className="h-64 no-scroll-bar-overflow ">
            {completed.map((student) => (
              <div className="flex justify-between p-1 w-full">
                <span className="font-bold">{student}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bg-dc-dark h-full p-8 flex flex-col items-center justify-center">
        <span className="text-4xl m-2 font-extrabold text-white">
          Who's Next?
        </span>
        <div className="w-64 h-48 flex bg-gray-400 justify-center items-center text-3xl font-bold inset-auto">
          {finished && <span>{name}</span>}
        </div>
        <PrimaryButton onClick={randomPicker}>Random Student</PrimaryButton>
      </div>
      <div className="flex flex-col items-center justify-center h-full w-72 flex-grow-2">
        <div
          className={
            !finished
              ? classnames(baseClassNameContainer)
              : classnames(baseClassNameContainer, finishedBorder)
          }
        >
          {!finished && (
            <span className="absolute text-2xl tracking-wider transform rotate-45">
              {name}
            </span>
          )}

          {!finished && (
            <span className="absolute text-2xl tracking-wider transform -translate-y-24 translate-x-24 rotate-45">
              {name}
            </span>
          )}
          {!finished && (
            <span className="absolute text-2xl tracking-wider transform -translate-y-12 translate-x-12 rotate-45">
              {name}
            </span>
          )}

          {!finished && (
            <span className="absolute text-2xl tracking-wider transform -translate-y-6 translate-x-6 rotate-45">
              {name}
            </span>
          )}
          {!finished && (
            <span className="absolute text-2xl tracking-wider transform translate-y-24 -translate-x-24 rotate-45">
              {name}
            </span>
          )}
          {!finished && (
            <span className="absolute text-2xl tracking-wider transform translate-y-12 -translate-x-12 rotate-45">
              {name}
            </span>
          )}

          {!finished && (
            <span className="absolute text-2xl tracking-wider transform translate-y-6 -translate-x-6 rotate-45">
              {name}
            </span>
          )}
          <span
            className={
              !animate
                ? classnames(baseClassNameSpinner)
                : classnames(animateSpinner)
            }
          >
            {name}
          </span>
          {!finished && (
            <span className="absolute text-2xl tracking-wider transform -rotate-45">
              {name}
            </span>
          )}

          {!finished && (
            <span className="absolute text-2xl tracking-wider transform -translate-y-24 -translate-x-24 -rotate-45">
              {name}
            </span>
          )}
          {!finished && (
            <span className="absolute text-2xl tracking-wider transform -translate-y-12 -translate-x-12 -rotate-45">
              {name}
            </span>
          )}
          {!finished && (
            <span className="absolute text-2xl tracking-wider transform -translate-y-6 -translate-x-6 -rotate-45">
              {name}
            </span>
          )}

          {!finished && (
            <span className="absolute text-2xl tracking-wider transform translate-y-24 translate-x-24 -rotate-45">
              {name}
            </span>
          )}
          {!finished && (
            <span className="absolute text-2xl tracking-wider transform translate-y-12 translate-x-12 -rotate-45">
              {name}
            </span>
          )}
          {!finished && (
            <span className="absolute text-2xl tracking-wider transform translate-y-6 translate-x-6 -rotate-45">
              {name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
