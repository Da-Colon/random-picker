import React from "react";
import classnames from 'classnames'

const base = "text-black bg-white focus:outline-none py-1 text-md w-24 tracking-wide rounded border-black border-solid border"

const SecondaryButton = ({label, classname, ...rest}) => (
  <button
    {...rest}
    className={classnames(base, classname)} >
    {label}
  </button>
);

export default SecondaryButton;
