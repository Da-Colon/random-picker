import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { DispatchContext } from "../context";
import post from "../utils/post";
import Modal from "./views/modal";
import RegisterForm from "./Register/RegisterForm";

const Register = () => {
  const history = useHistory();
  const dispatch = useContext(DispatchContext);

  const _handleSubmit = async (values) => {
    try{
      const res = await post( `${process.env.REACT_APP_ENDPOINT}/users/register`, values );
      const { user } = await res.json();
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "LOGGED_IN", payload: { user: user } });
      history.push("/");
    } catch (error) {
      console.error(error)
    }  
  };

  const _initialValues = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    isInstructor: "",
    notInstructor: "",
  }

  const _validationSchema = () => {
    return Yup.object().shape({
      username: Yup.string().required("Username is Required"),
      password: Yup.string().required("Password is Required"),
      firstName: Yup.string().required("First name is Required"),
      lastName: Yup.string().required("Last name is Required"),
      isInstructor: Yup.bool().required("Must choose one option"),
    })
  }

  return (
    <Modal>
      <RegisterForm
        initialValues={_initialValues}
        handleSubmit={_handleSubmit}
        validationSchema={_validationSchema}
      />
    </Modal>
  )
};

export default Register;
