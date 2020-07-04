import React, { useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { DispatchContext, StateContext } from "../context";
import post from "../utils/post";
import Modal from "./views/modal";
import Error from "./views/formError";
import PrimaryButton from "./views/primaryButton";
import SecondaryButton from "./views/secondaryButton";
import LoadingModal from "./views/loadingModal";


const Login = () => {
  const history = useHistory();
  const dispatch = useContext(DispatchContext);
  const {submitting} = useContext(StateContext)
  const [error, setError] = useState(null);
  const [userPassword] = useState("");

  const _onSubmit = async (values) => {
    dispatch({ type: "SUBMITTING"})
    try {
      const res = await post(`${process.env.REACT_APP_ENDPOINT}/users/login`, values);
      const { user } = await res.json();

      if(res.status === 200){
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({ type: "LOGGED_IN", payload: { user: user } });
        dispatch({ type: "LOGIN_MENU_TOGGLE"})
        setTimeout(() => {
          dispatch({ type: "SUBMITTING" });
        }, 3000);
        if(user.prefered_class_list !== null){
          await getDefaultClass(user)
        }
        history.push('/')
        window.location.reload()
      } else {
        dispatch({ type: "SUBMITTING"})
      }

    } catch (error) {
      setError("There was a problem signing in");
      console.log(error);
    }
  };

  const getDefaultClass = async (user) => {
    try{
      const res = await post(`${process.env.REACT_APP_ENDPOINT}/class/getdefaultclass`, user)
      const data = await res.json();
      if(res.status === 200){
        localStorage.setItem('prefered_class', JSON.stringify(data))
      } 
    } catch (error){
      console.log(error)
      return;
    }
  }

  const _closeMenu = (e) => {
    if(e.target.id === 'modal-overlay'){
      dispatch({type: "LOGIN_MENU_TOGGLE"})
    }
  }

  return (
    <>
      {submitting && <LoadingModal>Logging in...</LoadingModal>}
      <Modal _onClose={_closeMenu}>
        {error && <Error>{error}</Error>}
        <Formik
          validationSchema={Yup.object().shape({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required")
          })}
          initialValues={{
            username: "",
            password: userPassword ? userPassword : "",
          }}
          onSubmit={(values) => {
            _onSubmit({
              ...values,
              username: values.username,
              password: values.password,
            });
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form data-cy="login-form" className="flex flex-col" onSubmit={handleSubmit}>
              {(errors.username && touched.username) && <Error data-cy="error-username">{errors.username}</Error>}
              {(errors.password && touched.password) && <Error data-cy="error-password">{errors.password}</Error>}
              <label className="pt-4 text-xl font-semibold" htmlFor="username">
                User Name:
              </label>
              <input
                data-cy="username-input"
                error={errors.username}
                className="p-2 pl-4 outline-none rounded-lg bg-gray-300"
                type="username"
                autoComplete="username"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
              <label className="pt-4 text-xl font-semibold" htmlFor="password">
                Password:
              </label>
              <input
                data-cy="password-input"
                error={errors.password}
                className="p-2 pl-4 outline-none rounded-lg bg-gray-300"
                onChange={handleChange}
                type="password"
                name="password"
                autoComplete="current-password"
                value={values.password}
              />
              <div className="w-full text-right mt-4 flex flex-col">
                <PrimaryButton data-cy="login-button" type="submit">Login</PrimaryButton>
                <SecondaryButton data-cy="cancel-button" onClick={() => dispatch({type: "LOGIN_MENU_TOGGLE"})} type="button">
                  Cancel
                </SecondaryButton>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default Login;
