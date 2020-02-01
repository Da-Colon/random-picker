import React from "react";
import { SpinnerContainer } from "./Styles/Containers";
import {RandomButton} from "./Styles/Buttons"
import { Name } from "./Styles/Fonts";

import './Styles/spinner.css'

export default function Spinner(props) {

  return (
    <>
      <SpinnerContainer className={props.border}>
        <Name className={props.styles}>{props.name}</Name>
      </SpinnerContainer>
      <RandomButton onClick={props.randomPicker}>Random Student</RandomButton>
    </>
  );
}


