import React from 'react'
import Error from '../views/formError'
import { Formik} from 'formik'
import PrimaryButton from '../views/buttons/primaryButton'
import SecondaryButton from '../views/buttons/secondaryButton'
import InputWithLabel from '../views/forms/inputwithLabel'
import CheckboxWithLabel from '../views/forms/checkboxWithLabel'
import FormHeader from '../views/formHeader'

const RegisterForm = ({handleSubmit, initialValues, validationSchema}) => (
  <Formik
    validationSchema={validationSchema}
    initialValues={initialValues}
    onSubmit={(values) => handleSubmit({...values})}>
    {({ values, errors, touched, handleChange, handleSubmit, resetForm, setFieldValue }) => (
      <form className="flex flex-col text-left pt-4" onSubmit={handleSubmit}>
        <div className="pt-6 px-8 mb-8">
          <FormHeader title="Register to get started!" />
          {errors.username && touched.username && <Error>{errors.username}</Error>}
          <InputWithLabel
            classname="mb-4"
            label="Username:"
            name="username"
            error={touched.username ? errors.username : null}
            value={values.username}
            handleChange={handleChange}
            autocomplete="username"/>
          {errors.password && touched.password && <Error>{errors.password}</Error>}
          <InputWithLabel
            classname="mb-4"
            label="Password:"
            name="password"
            error={touched.password ? errors.password : null}
            value={values.password}
            handleChange={handleChange}
            autocomplete="password"/>
          {errors.firstName && touched.firstName && <Error>{errors.firstName}</Error>}
          <InputWithLabel
            classname="mb-4"
            label="First Name:"
            name="firstName"
            error={touched.firstName ? errors.firstName : null}
            value={values.firstName}
            handleChange={handleChange}/>
          {errors.lastName && touched.lastName && <Error>{errors.lastName}</Error>}  
          <InputWithLabel
            classname="mb-4"
            label="Last Name:"
            name="lastName"
            error={touched.lastName ? errors.lastName : null}
            value={values.lastName}
            handleChange={handleChange}
            autocomplete="lastName"/>
          {errors.isInstructor && touched.isInstructor && <Error>{errors.isInstructor}</Error>}
          <div className="grid grid-col-2 items-center">
            <div className="pt-4 text-md font-semibold pb-4 row-start-1">Are you the instructor?</div>
            <div className="flex row-start-1 justify-around">
                  <CheckboxWithLabel 
                    label="Yes"
                    name="isInstructor"
                    handleChange={() => {
                      setFieldValue(`isInstructor`, !values.isInstructor)
                      setFieldValue(`notInstructor`, false)
                    }}
                    value={values.isInstructor}
                    checked={values.isInstructor} />
                  <CheckboxWithLabel
                    label="No"
                    handleChange={() => {
                      setFieldValue(`notInstructor`, !values.notInstructor)
                      setFieldValue(`isInstructor`, false)                      
                    }}
                    name="notInstructor"
                    value={values.notInstructor}
                    checked={values.notInstructor} />
              </div>
          </div>
        </div>
        <div className="w-full py-4 px-8 text-right bg-teal-100 border-t-2 border-gray-200">
          <SecondaryButton classname="mr-4" type="button" label="Cancel" onClick={resetForm} />
          <PrimaryButton type="submit" label="Register" />
        </div>
      </form>
    )}
  </Formik>
)

export default RegisterForm