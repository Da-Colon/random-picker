import React from "react";

export default function BottomButtons(props) {
  return (
    <div>
      <button onClick={props.handleClickClass}>Class List</button>
      <button onClick={props.handleClickCalled}>Called List</button>
    </div>
  );
}
