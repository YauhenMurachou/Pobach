import React from "react"
import { Field, Form, Formik, FormikHelpers } from "formik"
import * as Yup from "yup"

import classes from "./Dialogs.module.css"

const MessageSchema = Yup.object().shape({
  newMessage: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required")
})

export type Props = {
  onSubmit: (
    values: { newMessage: string },
    formikHelpers: FormikHelpers<{ newMessage: string }>
  ) => void
}

const DialogsForm: React.FC<Props> = ({ onSubmit }) => (
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

export default DialogsForm
