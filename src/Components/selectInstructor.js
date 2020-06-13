import React, { useContext, useEffect } from "react";
import { StateContext, DispatchContext } from "../context";
import get from "../utils/get";
import { nameFormat } from "../utils/users";

const SelectInstructor = (props) => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    get(`${process.env.REACT_APP_ENDPOINT}/users/instructors`).then((data) =>
      dispatch({ type: "UPDATE_INSTRUCTOR_LIST", payload: data })
    );
  }, [dispatch]);

  const _handleFirstOption = (e) => {
    e.currentTarget.firstChild.setAttribute('disabled', 'true');
    e.currentTarget.firstChild.innerText = "Instructors"
  }

  return (
    <select {...props} onClick={_handleFirstOption}>
      <option defaultValue >Click to see List</option>
      {state.instructorList.map((instructor) => (
        <option key={instructor.id} value={instructor.id}>
          {nameFormat(instructor.first_name, instructor.last_name)}
        </option>
      ))}
    </select>
  );
};

export default SelectInstructor;
