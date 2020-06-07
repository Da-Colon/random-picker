import React from "react";
import { Ol, ListTitles, Li } from "./Styles/Fonts.jsx";
import { XButton } from "./Styles/Buttons";

export const ClassList = props => (
    <>
      <h2>Queue</h2>
      <ol>
        {props.students.map((student, index) => (
          <div key={index}>
            <li className="class">
              {student.name}
              <XButton id="class" onClick={() => props.removeStudent(index)}>X</XButton>
            </li>
          </div>
        ))}
      </ol>
    </>
  );

