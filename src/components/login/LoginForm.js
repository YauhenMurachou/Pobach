import React from "react"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"

import classes from "./Login.module.css"

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .max(20, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .max(15, "Too Long!")
    .required("Required")
})

const LoginForm = ({ onSubmit }) => {
  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={LoginSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field placeholder="login" name="email" id="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div>
              <Field placeholder="password" name="password" id="password" type="password" />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
            </div>
            <div>
              <Field type="checkbox" name="rememberMe" />
              remember me
            </div>
            <div>
              <button type="submit">Login </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default LoginForm
