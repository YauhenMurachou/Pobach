import React from "react"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"

import classes from "./Dialogs.module.css"

const MessageSchema = Yup.object().shape({
  newMessage: Yup.string().min(2, "Too Short!").max(20, "Too Long!").required("Required")
})

const DialogsForm = ({ onSubmit }) => {
  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          newMessage: ""
        }}
        validationSchema={MessageSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field name="newMessage" id="newMessage" component="textarea" />
              {errors.newMessage && touched.newMessage ? <div>{errors.newMessage}</div> : null}
            </div>
            <button className={classes.addButton} type="submit">
              Write message
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default DialogsForm
