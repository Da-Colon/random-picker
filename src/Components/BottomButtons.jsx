import React from "react";
import { BottomContainer, TheBottomButtons } from "./Styles/Buttons";

export default function BottomButtons(props) {
  return (
    <BottomContainer>
      <TheBottomButtons onClick={props.handleClickClass}>Class List</TheBottomButtons>
      <TheBottomButtons onClick={props.handleClickCalled}>Called List</TheBottomButtons>
    </BottomContainer>
  );
}
