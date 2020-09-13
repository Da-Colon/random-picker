import React from "react";
import classnames from "classnames";

const baseClass = "text-sm text-red-600 mt-1";

const Error = (props) => (
  <div className={classnames(baseClass, props.classname)}>
    <i className="fas fa-exclamation-circle inline-block mr-2" />
    {props.children}
  </div>
);

export default Error;
