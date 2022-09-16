import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { loginType } from './Login';

//TODO need for style this form and using Material

const LoginSchema = Yup.object().shape({
  email: Yup.string().max(20, 'Too Long!').required('Required'),
  password: Yup.string().max(15, 'Too Long!').required('Required'),
});

export type Props = {
  onSubmit: (
    values: loginType,
    formikHelpers: FormikHelpers<{
      email: string;
      password: string;
      rememberMe: boolean | null;
    }>
  ) => void;
};

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <>
      <Formik
        // @ts-ignore
        onSubmit={onSubmit}
        initialValues={{
          email: '',
          password: '',
          rememberMe: null,
        }}
        validationSchema={LoginSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field placeholder="login" name="email" id="email" />
              {/* @ts-ignore */}
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div>
              <Field
                placeholder="password"
                name="password"
                id="password"
                type="password"
              />
              {/* @ts-ignore */}
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
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
  );
};

export default LoginForm;
