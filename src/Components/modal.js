import React from "react";

const Modal = (props) => (
  <>
    <div
      id="modal-overlay"
      onClick={props._onClose}
      className="pt-16 fixed h-screen w-full flex justify-end"
    >
    <div className="p-6 bg-white rounded-md shadow-2xl w-64 h-max_content">
      {props.children}
    </div>
    </div>
  </>
);

export default Modal;
