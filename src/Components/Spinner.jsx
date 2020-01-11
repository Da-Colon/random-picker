import React from "react";
import { SpinnerContainer } from "./Styles/Containers";
import {RandomButton} from "./Styles/Buttons"
import { Name } from "./Styles/Fonts";

export default function Spinner(props) {

  return (
    <>
      <SpinnerContainer>
        <Name>{props.name}</Name>
      </SpinnerContainer>
      <RandomButton onClick={props.randomPicker}>Choose a Random Student</RandomButton>
    </>
  );
}
