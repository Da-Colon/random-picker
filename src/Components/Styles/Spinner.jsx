import React from "react";
import './Styles/spinner.css'

export default function Spinner(props) {

  return (
    <>
      <div className={props.border}>
        <span className={props.styles} >{props.name}</span>
      </div>
      <button onClick={props.randomPicker}>Random Student</button>
    </>
  );
}


