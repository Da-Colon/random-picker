import React from "react";
import { Formik } from "formik";
import PrimaryButton from "../views/buttons/primaryButton";
import SecondaryButton from "../views/buttons/secondaryButton";
import InputWithLabel from "../views/forms/inputwithLabel";
import Error from "../views/formError";
import FormHeader from "../views/formHeader";


const Login = ({loginSchema, initialValues, handleSubmit}) => (
  <Formik
    validationSchema={loginSchema}
    initialValues={initialValues}
    onSubmit={(values) => {handleSubmit({...values})}}>
    {({ values, errors, touched, handleChange, handleSubmit, resetForm, validateForm }) => (
      <form data-cy="login-form" className="" onSubmit={handleSubmit}>
        <div className="pt-6 px-8 mb-8">
          <FormHeader title="Login to get back to it!" />
          <InputWithLabel
            classname="mb-4"
            label="Username:"
            name="username"
            error={errors.username}
            value={values.username}
            handleChange={handleChange}
            autocomplete="username"
            />
          <InputWithLabel
            classname="mb-4"
            label="Password:"
            name="password"
            error={errors.password}
            value={values.password}
            handleChange={handleChange}
            autocomplete="password"
            />
          <div>
            {errors.username && touched.username && <Error>{errors.username}</Error>}
            {errors.password && touched.password &&<Error>{errors.password}</Error>}
          </div>
        
        </div>
        <div className="w-full py-4 px-8 text-right bg-teal-100 border-t-2 border-gray-200">
          <SecondaryButton classname="mr-4" type="reset" label="Cancel" onClick={resetForm}/>
          <PrimaryButton classname="" type="submit" label="Login" />
        </div>
      </form>
    )}
  </Formik>
);

export default Login;
