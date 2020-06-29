import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import PrimaryButton from "./views/primaryButton";
import Error from "./views/formError";
import { DispatchContext, StateContext } from "../context";
import LoadingModal from "./views/loadingModal";
import post from "../utils/post";
import FormModal from "./views/formModal";

const Register = () => {
  const history = useHistory();
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const [submitting, setSubmitting] = useState(state.submitting);

  useEffect(() => {
    setSubmitting(state.submitting);
  }, [state.submitting]);

  const _onSubmit = async (values) => {
    dispatch({ type: "SUBMITTING" });
    const res = await post( `${process.env.REACT_APP_ENDPOINT}/users/register`, values );
    const { user } = await res.json();
    if (res.status === 200) {
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "LOGGED_IN", payload: { user: user } });
      setTimeout(() => { dispatch({ type: "SUBMITTING" }) }, 2000);
      history.push("/");
    } else {
      dispatch({ type: "SUBMITTING" });
    }
  };

  return (
    <>
      {submitting && <LoadingModal>Submitting...</LoadingModal>}
       <FormModal header="Register New Account!">
          <Formik
            validationSchema={Yup.object().shape({
              username: Yup.string().required("Required"),
              password: Yup.string().required("Required"),
              firstName: Yup.string().required("Required"),
              lastName: Yup.string().required("Required"),
              isInstructor: Yup.bool().required("Required"),
            })}
            initialValues={{
              username: "",
              password: "",
              firstName: "",
              lastName: "",
              isInstructor: false
            }}
            onSubmit={(values) => {
              _onSubmit({
                ...values,
                username: values.username,
                password: values.password,
                firstName: values.firstName,
                lastName: values.lastName,
                isInstructor: values.isInstructor
              });
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form
                className="flex flex-col text-left pt-4"
                onSubmit={handleSubmit}
              >
                <label className="pt-4 text-xl font-semibold flex justify-between flex-wrap">
                  Username:
                  {errors.username && touched.username && (
                    <Error>{errors.username}</Error>
                  )}
                  <input
                    error={errors.username}
                    className="w-64 p-1 pl-4 ml-8 outline-none rounded-lg bg-gray-300 self-end"
                    type="text"
                    name="username"
                    autoComplete="username"
                    value={values.username}
                    onChange={handleChange}
                  />
                </label>
                <label className="pt-4 text-xl font-semibold flex justify-between flex-wrap">
                  Password:
                  {errors.password && touched.password && (
                    <Error>{errors.password}</Error>
                  )}
                  <input
                    error={errors.password}
                    className="w-64 p-1 pl-4 ml-8 outline-none rounded-lg bg-gray-300"
                    type="password"
                    autoComplete="new-password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </label>
                <label className="pt-4 text-xl font-semibold flex justify-between flex-wrap">
                  First Name:
                  {errors.firstName && touched.firstName && (
                    <Error>{errors.firstName}</Error>
                  )}
                  <input
                    error={errors.firstName}
                    className="w-64 p-1 pl-4 ml-8 outline-none rounded-lg bg-gray-300"
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                  />
                </label>
                <label className="pt-4 text-xl font-semibold flex justify-between flex-wrap">
                  Last Name:
                  {errors.lastName && touched.lastName && (
                    <Error>{errors.lastName}</Error>
                  )}
                  <input
                    error={errors.lastName}
                    className="w-64 p-1 pl-4 ml-8 outline-none rounded-lg bg-gray-300"
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                </label>
                  <div className="pt-8 text-xl font-semibold text-center pb-4">
                    Are you the instructor?
                  </div>
              
                <div className={"flex justify-center"}>
                  
                    <Field name="isInstructor">
                      {({ field }) => (
                        <>
                          <label
                            className="text-md mx-4 font-semibold"
                          >
                            <input
                              {...field}
                              errors={errors.isInstructor}
                              className="mr-2 w-8"
                              value="true"
                              type="radio"
                              onChange={handleChange}
                              checked={field.value === "true"}
                            />
                            Yes
                          </label>
                          <label
                            className="text-md mx-4 font-semibold"
                          >
                            <input
                              {...field}
                              errors={errors.isInstructor}
                              className="mr-2 w-8"
                              value="false"
                              type="radio"
                              onChange={handleChange}
                              checked={field.value === "false"}
                            />
                            No
                          </label>
                        </>
                      )}
                    </Field>
                </div>
                <PrimaryButton className="w-48 self-center my-8" type="submit">
                  Register
                </PrimaryButton>
              </form>
            )}
          </Formik>
       </FormModal>
    </>
  );
};

export default Register;
