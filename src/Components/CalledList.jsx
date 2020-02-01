import React from "react";
import { ListTitles, Ol, Li } from "./Styles/Fonts";

export const CalledList = props => (
  <>
    <ListTitles>Completed</ListTitles>
    <Ol>
      {props.completed.map((student, index) => (
        <div key={index}>
          <Li>{student.name}</Li>
        </div>
      ))}
    </Ol>
  </>
);
