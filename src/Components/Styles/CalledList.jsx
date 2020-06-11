import React from "react";

export const CalledList = props => (
  <>
    <h2>Completed</h2>
    <ol>
      {props.completed.map((student, index) => (
        <div key={index}>
          <li>{student.name}</li>
        </div>
      ))}
    </ol>
  </>
);
