import React from "react";
import classnames from "classnames";

const base = "grid grid-cols-2 my-1"

const inputBase = "py-1 pr-2 pl-4 focus:outline-none rounded-md bg-gray-200 border-2 border-gray-100"
const classerror = "border-red-800 bg-red-100"

const InputWithLabel = ({name, label, value, handleChange, autocomplete, error, classname, ...rest}) => (
  <div className={classnames(base, classname)}>
    <label 
      className="text-md font-semibold mr-4 align-top" 
      htmlFor={name}>
        {label}
    </label>
    <input
    {...rest}
    id={name}
    type="text" 
    className={error ? classnames(inputBase, classerror) : inputBase}
    name={name}
    value={value}
    error={error}
    onChange={handleChange}
    autoComplete={autocomplete}
    />
  </div>
);

export default InputWithLabel;
