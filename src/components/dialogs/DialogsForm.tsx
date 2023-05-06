import { FC } from 'react';
import { Button } from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

const MessageSchema = Yup.object().shape({
  newMessage: Yup.string().min(1, 'Too Short!').max(30, 'Too Long!'),
});

type Props = {
  onSubmit: (
    values: { newMessage: string },
    formikHelpers: FormikHelpers<{ newMessage: string }>
  ) => void;
};

const DialogsForm: FC<Props> = ({ onSubmit }) => (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          newMessage: '',
        }}
        validationSchema={MessageSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field name="newMessage" id="newMessage" component="textarea" />
              {errors.newMessage && touched.newMessage ? (
                <div>{errors.newMessage}</div>
              ) : null}
            </div>
            <Button type="submit">send message</Button>
          </Form>
        )}
      </Formik>
    </>
  );

export default DialogsForm;
