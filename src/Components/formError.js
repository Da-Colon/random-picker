import React from "react";
import classname from "classnames";

const baseClass = "text-sm text-red-600 mt-1";
const animatedClass = baseClass + " animated shake";

const Error = (props) => (
  <div
    {...props}
    className={
      props.animate
        ? classname(animatedClass, props.className)
        : classname(baseClass, props.className)
    }
  >
    <i className="fas fa-exclamation-circle inline-block" /> {props.children}
  </div>
);

export default Error;
