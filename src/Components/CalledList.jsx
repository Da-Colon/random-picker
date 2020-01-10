import React from "react";
import { ListTitles, Ol, Li } from "./Styles/Fonts";

export default function CalledList(props) {
  return (
    <>
      <ListTitles>Completed</ListTitles>
      <Ol>
        {props.completed.map((student, index) => (
          <div key={student.id}>
            <Li>
              {student.name}
            </Li>
          </div>
        ))}
      </Ol>
    </>
  );
}
