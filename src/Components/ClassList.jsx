import React from "react";
import { Ol, ListTitles, Li } from "./Styles/Fonts.jsx";
import { XButton } from "./Styles/Buttons";

export default function ClassList(props) {
  return (
    <>
      <ListTitles>Queue</ListTitles>
      <Ol>
        {props.students.map((student, index) => (
          <div key={student.id}>
            <Li>
              {student.name}
              <XButton onClick={() => props.removeStudent(index)}>X</XButton>
            </Li>
          </div>
        ))}
      </Ol>
    </>
  );
}
