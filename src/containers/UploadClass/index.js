import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { StateContext, DispatchContext } from "../../context";
import post from "../../utils/post";
import FormModal from "../../components/views/forms/formModal";
import PrimaryButton from "../../components/views/buttons/primaryButton";
import XButton from "../../components/views/xButton";
import SecondaryButton from "../../components/views/buttons/secondaryButton";
import LoadingModal from "../../components/views/loadingModal";

const UploadClassList = () => {
  const history = useHistory();
  const { user, submitting } = useContext(StateContext);
  const dispatch = useContext(DispatchContext)
  const [hide, setHide] = useState(false);
  const [students, setStudents] = useState([]);
  const [numOfStudents, setNumOfStudents] = useState(24)
  const [className, setClassName] = useState("");
  const [file, setFile] = useState(undefined);

  const _handleUpLoad = async (e) => {
    e.preventDefault();
    setHide(true)
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/upload-csv`,
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

  const _handleNumChange = (e) => {
    const {value} = e.target
    setNumOfStudents(value)
  }

  const _handleClassListSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMITTING" })
    let newArr = [...students];
    const filteredNames = newArr.filter((students) => students !== "");
    const newClass = {
      className: className,
      classList: filteredNames,
      createdById: user.id,
    };
    const response = await post(`${process.env.REACT_APP_ENDPOINT}/class/new`, newClass);

    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem("prefered_class", JSON.stringify(data));
      _handleUpdateUserPreference(data.id);
      setTimeout(() => { dispatch({ type: "SUBMITTING"}) 
      history.push("/");
      window.location.reload();
      }, 2000);
    } else {
      console.log("ERROR adding new class.");
      dispatch({ type: "SUBMITTING" })
    }
  };

  const _addStudent = (e) => {
    e.preventDefault();
    let newArr = [...students];
    newArr.push("");
    setStudents(newArr);
  };

  const _handleUpdateUserPreference = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/users/default/${id}`,
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
      localStorage.getItem("user", JSON.stringify(data));
    }
  };

  const _removeStudent = async (removedStudent) => {
    const newArr = [...students];
    setStudents(newArr.filter((value, index) => index !== removedStudent));
  };

  const _manualCreateList = () => {
    setHide(true)
    for(let i = 0; i < numOfStudents; i++)
      students.push("")
  }

  return (
    <>
      {submitting && <LoadingModal>Saving...</LoadingModal>}
      <FormModal>
        {!hide && (
          <>
            <h1 className="text-2xl font-extrabold">Upload from Schoology</h1>
            <input data-cy="upload-file-input" className="bg-gray-200 mr-2" type="file" onChange={(e) => setFile(e.target.files[0])} />
            <PrimaryButton data-cy="upload-file-button" onClick={_handleUpLoad}>Upload</PrimaryButton>
            <div data-cy="instruction-link" className="text-blue-700 text-sm cursor-pointer tracking-wide" onClick={() => history.push('/instructions')}>
              Click Here for Instuctions
            </div>
              or
            <div>
              <h1 className="text-2xl font-extrabold">Create from scratch</h1>
              Number of Students: 
              <input
                data-cy="number-of-students"
                className="mx-2 bg-gray-200 pl-2" 
                type="number"
                value={numOfStudents}
                min="1"
                max="30"
                onChange={_handleNumChange}
              />
              <PrimaryButton onClick={_manualCreateList}>
                Create
              </PrimaryButton>
            </div>
          </>
        )}

      {students.length > 0 && (
        <form className="flex flex-col" onSubmit={_handleClassListSubmit}>
          <label htmlFor="class-name" className="text-lg font-semibold">
            Class Name:
            <input
              data-cy="class-name"
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
          <div data-cy="class-list-container" className="flex items-center justify-center flex-wrap">
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
            data-cy="add-student-button"
            onClick={_addStudent}
            className="m-2 p-1 px-2 w-48 self-center"
            >
            <i className="fas fa-plus" /> Add Student
          </SecondaryButton>
          <div>
            <PrimaryButton data-cy="save-button" typeOfButton="submit">Save</PrimaryButton>
          </div>
        </form>
      )}
    </FormModal>
    </>
  );
};

export default UploadClassList;
