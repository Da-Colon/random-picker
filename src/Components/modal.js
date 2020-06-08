import React from "react";

const Modal = (props) => (
  <div className="bg-gray-200 w-full h-screen flex items-start justify-end">
    <div className="p-6 bg-white rounded-md">{props.children}</div>
  </div>
);

export default Modal;
