import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const dispatchContext = useContext(DispatchContext);
  const [error, setError] = useState(null);
  const [userPassword] = useState("");

  const _onSubmit = async (values) => {
    try {
      const res = await post(
        `${process.env.REACT_APP_ENDPOINT}/users/login`,
        values
      );
      const { user } = await res.json();
      if(!localStorage.length > 0){
        console.log('hello')
        localStorage.setItem('user', JSON.stringify(user));
      }
      

      dispatchContext({ type: "LOGGED_IN", payload: { user: user } });
      history.push("/");
    } catch (error) {
      setError("There was a problem signing in");
      console.log(error);
    }
  };

  const _onCancel = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <Modal>
      <Formik
        validationSchema={Yup.object().shape({
          email: Yup.string().required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            .min(4, "Password at least 6 characters"),
        })}
        initialValues={{
          email: "",
          password: userPassword ? userPassword : "",
        }}
        onSubmit={(values) => {
          _onSubmit({
            ...values,
            email: values.email,
            password: values.password,
          });
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {errors.email && <Error>{errors.email}</Error>}
            {errors.password && <Error>{errors.password}</Error>}
            <label className="pt-4 text-xl font-semibold" htmlFor="email">
              Email:
            </label>
            <Input
              error={errors.email}
              className="w-48 bg-gray-400"
              type="email"
              autoComplete="username"
              name="email"
              value={values.userName}
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
              <SecondaryButton onClick={_onCancel} type="button">
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
