import React from "react";

const LoadingModal = (props) => (
  <>
    <div className="pt-16 fixed h-screen w-full flex items-center justify-center">
      <div className="p-6 bg-white rounded-lg shadow-2xl w-36">
        <div className="flex justify-center text-4xl">
        {props.children}
        </div>
        <div className="flex justify-center">
        <i className=" text-teal-700 fas fa-spinner fa-spin fa-4x mt-4 p-2" />
        </div>
      </div>
    </div>
  </>
);

export default LoadingModal;
