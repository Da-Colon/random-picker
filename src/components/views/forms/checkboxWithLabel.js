import React from 'react'
import classnames from "classnames";

const base = ""

const inputBase = "py-1 pr-2 pl-4 focus:outline-none rounded-md bg-gray-200 border-2 border-gray-100"
const classerror = "border-red-800 bg-red-100"

const CheckboxWithLabel = ({name, label, handleChange, value, error, classname, checked}) => (
  <div className={classnames(base, classname)}>
    <input
      checked={checked}
      id={name}
      type="checkbox"
      onChange={handleChange} 
      className={error ? classnames(inputBase, classerror) : inputBase}
      name={name}
      value={value}
      error={error}
    />
    <label
      className="text-md font-semibold mx-2" 
      htmlFor={name}>
        {label}
    </label>
  </div>
)

export default CheckboxWithLabel;