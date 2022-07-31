import React from "react"

import { Formik, Field, Form } from "formik"

import classes from "./Dialogs.module.css"

const DialogsForm = ({ handleSubmit }) => {
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          newMessage: ""
        }}
      >
        <Form>
          <div>
            <Field name="newMessage" id="newMessage" />
          </div>
          <button className={classes.addButton} type="submit">
            Write message
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default DialogsForm
