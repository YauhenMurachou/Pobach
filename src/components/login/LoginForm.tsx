import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-mui';
import { LoginType } from 'src/components/login/Login';
import { RootState } from 'src/redux/redux-store';
import * as Yup from 'yup';

import styles from './Login.module.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .max(25, 'Too Long!')
    .required('Required')
    .email('Invalid email format'),
  password: Yup.string().max(15, 'Too Long!').required('Required'),
});

type Props = {
  onSubmit: (
    values: LoginType,
    formikHelpers: FormikHelpers<{
      email: string;
      password: string;
      rememberMe: boolean;
      captcha: string;
    }>
  ) => void;
};

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const { error, captcha } = useSelector((state: RootState) => state.auth);
  const { t } = useTranslation();
  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
          captcha: '',
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
                disabled={false}
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
                disabled={false}
              />
            </div>
            {captcha && (
              <>
                <img src={captcha} alt="captcha" width="180px" height="90px" />
                <Field
                  fullWidth
                  placeholder="captcha"
                  name="captcha"
                  id="captcha"
                  type="text"
                  label="captcha"
                  component={TextField}
                  disabled={false}
                />
              </>
            )}

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
                {t('login.enter')}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                href="https://social-network.samuraijs.com/login"
              >
                {t('login.registration')}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
