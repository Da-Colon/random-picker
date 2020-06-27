import React, { useState, useContext } from "react";
import FormModal from "./views/formModal";
import PrimaryButton from "./views/primaryButton";
import { StateContext } from "../context";
import post from "../utils/post";
import { useHistory } from "react-router-dom";
import XButton from "./views/xButton";
import SecondaryButton from "./views/secondaryButton";

const UploadClassList = () => {
  const history = useHistory();
  const [students, setStudents] = useState([]);
  const [className, setClassName] = useState("");
  const [file, setFile] = useState(undefined);
  const { user } = useContext(StateContext);

  const _handleUpLoad = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(
      `${process.env.REACT_APP_ENDPOINT}/upload-csv`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    await setStudents(data.classList);
  };

  const _handleChange = (e, index) => {
    let newArr = [...students];
    newArr[index] = e.currentTarget.value;
    setStudents(newArr);
  };

  const _handleClassListSubmit = async (e) => {
    let newArr = [...students];
    const filteredNames = newArr.filter((students) => students !== "");
    e.preventDefault();
    const newClass = {
      className: className,
      classList: filteredNames,
      createdById: user.id,
    };

    const response = await post(
      `${process.env.REACT_APP_ENDPOINT}/class/new`,
      newClass
    );

    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem("prefered_class", JSON.stringify(data));
      _handleUpdateUserPreference(data.id);
      history.push("/");
      window.location.reload();
    } else {
      console.log("ERROR adding new class.");
    }
  };

  const _addStudent = (e) => {
    e.preventDefault();
    let newArr = [...students];
    newArr.push("");
    setStudents(newArr);
  };

  const _handleUpdateUserPreference = async (id) => {
    const response = await fetch(
      `${process.env.REACT_APP_ENDPOINT}/users/default/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ userId: user.id }),
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      localStorage.removeItem("user");
      localStorage.getItem("user", JSON.stringify(data));
    }
  };

  const _removeStudent = async (removedStudent) => {
    const newArr = [...students];
    setStudents(newArr.filter((value, index) => index !== removedStudent));
  };

  return (
    <FormModal header="Upload CSV from Schoology">
      <input className="bg-gray-200 mr-2" type="file" onChange={(e) => setFile(e.target.files[0])} />
      <PrimaryButton onClick={_handleUpLoad}>Upload</PrimaryButton>

      {students.length > 0 && (
        <form className="flex flex-col" onSubmit={_handleClassListSubmit}>
          <label htmlFor="class-name" className="text-lg font-semibold">
            Class Name:
            <input
              type="text"
              onChange={(e) => setClassName(e.target.value)}
              className="bg-gray-200 m-2 p-1 px-2 rounded-md text-md"
              placeholder="example: January 2020 Cohort"
              required
              autoFocus
            />
          </label>
          <label htmlFor="edit-class-list" className="text-lg font-semibold">
            Edit Student Names
          </label>
          <div className="flex items-center justify-center flex-wrap">
            {students.map((student, index) => (
              <div key={index}>
                <input
                  name="edit-class-list"
                  className="bg-gray-200 m-2 p-1 px-2 rounded-md"
                  value={student}
                  type="text"
                  onChange={(e) => _handleChange(e, index)}
                />
                <XButton onClick={() => _removeStudent(index)} />
              </div>
            ))}
          </div>
          <SecondaryButton
            onClick={_addStudent}
            className="m-2 p-1 px-2 w-48 self-center"
          >
            <i className="fas fa-plus" /> Add Student
          </SecondaryButton>
          <div>
            <PrimaryButton type="submit">Save</PrimaryButton>
          </div>
        </form>
      )}
    </FormModal>
  );
};

export default UploadClassList;
