import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from 'src/redux/redux-store';

const StartPage: FC = () => {
  const { isAuth, userId } = useSelector((state: RootState) => state.auth);
  if (!isAuth) {
    return <Redirect to="/Login" />;
  }
  if (isAuth) {
    return <Redirect to={`/Profile/${userId}`} />;
  }
  return <></>;
};

export default StartPage;
