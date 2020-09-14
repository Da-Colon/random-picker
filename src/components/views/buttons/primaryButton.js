import React from "react";
import classnames from 'classnames'

const base = "py-1 text-md w-24 tracking-wide rounded border-black border-solid border"
const disabledClass = "bg-gray-500 text-gray-700 cursor-default"

const PrimaryButton =  ({label, classname, disable, bgColor, textColor, ...rest}) => (
  <button
    {...rest}
    disabled={disable}
    className={disable ? classnames(base, disabledClass, classname) : classnames(base, classname, bgColor, textColor)} >
    {label}
  </button>
);

PrimaryButton.defaultProps = {
  bgColor: "bg-dc-light",
  textColor: "text-dc-gold"
}

export default PrimaryButton;
