import React, {useContext} from 'react'
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { DispatchContext } from "../context";
import Modal from '../components/views/modal';
import LoginForm from '../components/Login'
import post from "../utils/post";

const LoginContainer = () => {
  const history = useHistory();
  const dispatch = useContext(DispatchContext);

  const _handleSubmit = async (values) => {
    dispatch({ type: "SUBMITTING"})
    try {
      const res = await post(`${process.env.REACT_APP_ENDPOINT}/users/login`, values);
      const { user } = await res.json();
      _setDefaultClass(user)
      setTimeout(() => {dispatch({ type: "SUBMITTING" });}, 3000);
      history.push('/')
      window.location.reload()
    } catch (error) {
      dispatch({ type: "SUBMITTING"})
      console.log(error);
    }
  };

  const _setDefaultClass = async (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({ type: "LOGGED_IN", payload: { user: user } });
    if(user.prefered_class_list !== null){
      await _getDefaultClass(user)
    }
  }

  const _getDefaultClass = async (user) => {
    try {
      const res = await post(`${process.env.REACT_APP_ENDPOINT}/class/getdefaultclass`, user)
      const data = await res.json();
      localStorage.setItem('prefered_class', JSON.stringify(data))
    } catch (error){
      console.log(error)
      return;
    }
  }
  
  const _loginSchema = () => {
    return Yup.object().shape({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required")
    })
  }

  const _initialValues = {
    username: "",
    password: "",
  }
  
  return (
    <Modal>
      <LoginForm 
        handleSubmit={_handleSubmit} 
        loginSchema={_loginSchema}
        initialValues={_initialValues} />
    </Modal>
    )
}

export default LoginContainer;