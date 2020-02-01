import React from "react";
import { Ol, ListTitles, Li } from "./Styles/Fonts.jsx";
import { XButton } from "./Styles/Buttons";

export const ClassList = props => (
    <>
      <ListTitles>Queue</ListTitles>
      <Ol>
        {props.students.map((student, index) => (
          <div key={index}>
            <Li className="class">
              {student.name}
              <XButton id="class" onClick={() => props.removeStudent(index)}>X</XButton>
            </Li>
          </div>
        ))}
      </Ol>
    </>
  );

