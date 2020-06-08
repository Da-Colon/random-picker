import React from "react";
import classnames from "classnames";

const baseClassName = "w-full p-3 pl-4 outline-none rounded-lg";
const className =
  baseClassName +
  " bg-gray-100 border-2 border-gray-200 focus:bg-blue-100 focus:border-blue-200";
const classNameError = className + " border-red-200";
const classNameDisabled =
  baseClassName + " bg-gray-100 border-gray-300 text-gray-400";

const Input = (props) => (
  <input
    {...props}
    className={
      props.error
        ? classNameError
        : classnames(
            props.disabled ? classNameDisabled : className,
            props.className
          )
    }
  />
);

export default Input;
