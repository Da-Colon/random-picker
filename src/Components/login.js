import React, { useState, useContext} from "react";
import { Formik } from "formik";
import Modal from "./modal";
import * as Yup from "yup";
import Error from "./formError";
import { DispatchContext } from "../context";
import post from "../utils/post";
import PrimaryButton from "./primaryButton";
import SecondaryButton from "./secondaryButton";
import Input from "./input";

const Login = (props) => {
  const dispatchContext = useContext(DispatchContext);
  const [error, setError] = useState(null);
  const [userPassword] = useState("");

  const _onSubmit = async (values) => {
    console.log(values)
    try {
      const res = await post(
        `${process.env.REACT_APP_ENDPOINT}/users/login`,
        values
      );
      const { user } = await res.json();
      if(!localStorage.length > 0){
        localStorage.setItem('user', JSON.stringify(user));
      }
      dispatchContext({ type: "LOGGED_IN", payload: { user: user } });
      props.handleLoginMenu();
    } catch (error) {
      setError("There was a problem signing in");
      console.log(error);
    }
  };

  const _closeMenu = (e) => {
    if(e.target.id === 'modal-overlay'){
      props.handleLoginMenu();
    }
  }

  return (
    <Modal _onClose={_closeMenu}>
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
            <Input
              error={errors.username}
              className="w-48 bg-gray-400"
              type="username"
              autoComplete="username"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            <label className="pt-4 text-xl font-semibold" htmlFor="password">
              Password: <span></span>
            </label>
            <Input
              error={errors.password}
              className="w-48 bg-gray-400"
              onChange={handleChange}
              type="password"
              name="password"
              autoComplete="current-password"
              value={values.password}
            />
            <div className="w-full text-right mt-4 flex flex-col">
              <PrimaryButton type="submit">Submit</PrimaryButton>
              <SecondaryButton onClick={props.handleLoginMenu} type="button">
                Cancel
              </SecondaryButton>
            </div>
          </form>
        )}
      </Formik>

      {error && <Error>{error}</Error>}
    </Modal>
  );
};

export default Login;
