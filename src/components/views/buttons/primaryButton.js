import React from "react";
import classnames from 'classnames'

const base = "bg-dc-light py-1 text-md w-24 text-dc-gold tracking-wide rounded border-black border-solid border"

const PrimaryButton =  ({label, classname, ...rest}) => (
  <button
    {...rest}
    className={classnames(base, classname)} >
    {label}
  </button>
);

export default PrimaryButton;
