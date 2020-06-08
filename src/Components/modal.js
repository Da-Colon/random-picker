import React from "react";

const Modal = (props) => (
  <div id="modal-overlay" onClick={props._onClose} className="bg-gray-300 h-full flex items-start justify-end">
    <div className="p-6 bg-white rounded-md shadow-2xl w-64">{props.children}</div>
  </div>
);

export default Modal;
