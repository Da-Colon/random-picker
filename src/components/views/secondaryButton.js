import React from "react";
import classnames from "classnames";

const className =
  "text-black outline-none text-lg tracking-wide px-2 py-1 rounded-md border-black border-solid border my-2";
const disabledClassName =
  "cursor-pointer bg-gray-300 text-gray-500 p-3 px-6 font-semibold rounded-full";

const SecondaryButton = (props) => (
  <button
    {...props}
    className={
      props.disabled
        ? classnames(disabledClassName, props.className)
        : classnames(className, props.className)
    }
  >
    {props.children}
  </button>
);

export default SecondaryButton;
