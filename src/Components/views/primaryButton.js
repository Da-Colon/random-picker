import React from "react";
import classnames from "classnames";

const className = "bg-dc-light text-lg text-white tracking-wide px-2 py-1 rounded-md border-black border-solid border my-2";
const disabledClass = 'bg-gray-300 text-gray-500 px-2 py-1 font-semibold rounded-md border-black border-solid border my-2';

const PrimaryButton = (props) => (
  <button 
    {...props} 
    className={props.disabled ? classnames(disabledClass, props.className) : classnames(className, props.className)}>
      {props.children}
  </button>
);

export default PrimaryButton;
