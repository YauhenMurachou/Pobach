import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { loginType } from './Login';
import { TextField, CheckboxWithLabel } from 'formik-mui';
import styles from './Login.module.css';
import { Button } from '@mui/material';
import { RootState } from '../../redux/redux-store';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .max(20, 'Too Long!')
    .required('Required')
    .email('Invalid email format'),
  password: Yup.string().max(15, 'Too Long!').required('Required'),
});

export type Props = {
  onSubmit: (
    values: loginType,
    formikHelpers: FormikHelpers<{
      email: string;
      password: string;
      rememberMe: boolean;
    }>
  ) => void;
};

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const { error } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        validationSchema={LoginSchema}
      >
        {({ errors, dirty }) => (
          <Form>
            <div className={styles.field}>
              <Field
                fullWidth
                id="email"
                name="email"
                label="Email"
                placeholder="Email"
                component={TextField}
              />
            </div>
            <div className={styles.field}>
              <Field
                fullWidth
                placeholder="Password"
                name="password"
                id="password"
                type="password"
                label="Password"
                component={TextField}
              />
            </div>
            {errors && <div className={styles.error}>{error}</div>}
            <div className={styles.field}>
              <Field
                type="checkbox"
                component={CheckboxWithLabel}
                name="rememberMe"
                Label={{ label: 'remember me' }}
              />
            </div>
            <div className={styles.buttons}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!!errors.email || !!errors.password || !dirty}
              >
                Войти
              </Button>
              <Button
                variant="contained"
                color="secondary"
                href="https://social-network.samuraijs.com/login"
              >
                Зарегистрироваться
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
