import React, { useState, useContext} from "react";
import { Formik } from "formik";
import Modal from "./modal";
import * as Yup from "yup";
import Error from "./formError";
import { DispatchContext } from "../context";
import post from "../utils/post";
import PrimaryButton from "./primaryButton";
import SecondaryButton from "./secondaryButton";


const Login = (props) => {
  const dispatch = useContext(DispatchContext);
  const [error, setError] = useState(null);
  const [userPassword] = useState("");

  const _onSubmit = async (values) => {
    try {

      const res = await post(`${process.env.REACT_APP_ENDPOINT}/users/login`, values);
      const { user } = await res.json();
      localStorage.setItem('user', JSON.stringify(user));
      
      dispatch({ type: "LOGGED_IN", payload: { user: user } });
      dispatch({ type: "LOGIN_MENU_TOGGLE"})

    } catch (error) {
      setError("There was a problem signing in");
      console.log(error);
    }
  };

  const _closeMenu = (e) => {
    if(e.target.id === 'modal-overlay'){
      dispatch({type: "LOGIN_MENU_TOGGLE"})
    }
  }

  return (
    <Modal _onClose={_closeMenu}>
      {error && <Error>{error}</Error>}
      <Formik
        validationSchema={Yup.object().shape({
          username: Yup.string().required("User name is required"),
          password: Yup.string()
            .required("Password is required")
            .min(4, "Password at least 4 characters"),
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
        {({ values, errors, handleChange, handleSubmit }) => (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {errors.username && <Error>{errors.username}</Error>}
            {errors.password && <Error>{errors.password}</Error>}
            <label className="pt-4 text-xl font-semibold" htmlFor="username">
              User Name:
            </label>
            <input
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
              error={errors.password}
              className="p-2 pl-4 outline-none rounded-lg bg-gray-300"
              onChange={handleChange}
              type="password"
              name="password"
              autoComplete="current-password"
              value={values.password}
            />
            <div className="w-full text-right mt-4 flex flex-col">
              <PrimaryButton type="submit">Login</PrimaryButton>
              <SecondaryButton onClick={() => dispatch({type: "LOGIN_MENU_TOGGLE"})} type="button">
                Cancel
              </SecondaryButton>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default Login;
