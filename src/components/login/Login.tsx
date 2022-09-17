import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { RootState } from '../../redux/redux-store';

import { loginDataThunkCreator } from '../../redux/authReducer';
// import { FormikHelpers } from 'formik';

export type loginType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const LogInFunction = (values: loginType) => {
    dispatch(
      loginDataThunkCreator(values.email, values.password, values.rememberMe)
    );
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <>
      <h1>Login</h1>

      <LoginForm onSubmit={LogInFunction} />
    </>
  );
};

export default Login;

/* <div>
			<a href="https://social-network.samuraijs.com/login" target="_blank" rel="noreferrer">Войдите в свой аккаунт</a>
		</div> */
