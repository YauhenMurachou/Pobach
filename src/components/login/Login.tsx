import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { RootState } from '../../redux/redux-store';

import { loginDataThunkCreator } from '../../redux/authReducer';
import styles from './Login.module.css';

export type loginType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login: FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const LogInFunction = (values: loginType) => {
    console.log('values', values);
    dispatch(
      loginDataThunkCreator(values.email, values.password, values.rememberMe)
    );
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.loginForm}>
          <h1 className={styles.title}>Вход в аккаунт</h1>
          <LoginForm onSubmit={LogInFunction} />
        </div>
      </div>
    </div>
  );
};

export default Login;
