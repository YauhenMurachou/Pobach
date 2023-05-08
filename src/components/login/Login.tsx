import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from 'src/components/login/LoginForm';
import { loginDataThunkCreator } from 'src/redux/authReducer';
import { RootState } from 'src/redux/redux-store';

import styles from './Login.module.css';

export type LoginType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string | null;
};

const Login: FC = () => {
  const dispatch = useDispatch();
  const { isAuth, userId } = useSelector((state: RootState) => state.auth);
  const { t } = useTranslation();
  const profilePath = `/Profile/${userId}`;

  const logInFunction = (values: LoginType) => {
    const { email, password, rememberMe, captcha } = values;
    dispatch(loginDataThunkCreator(email, password, rememberMe, captcha));
  };

  if (isAuth) {
    return <Redirect to={profilePath} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.loginForm}>
          <h1 className={styles.title}> {t('login.title')}</h1>
          <LoginForm onSubmit={logInFunction} />
        </div>
      </div>
    </div>
  );
};

export default Login;
