import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { useProfilePath } from 'src/hooks/useProfilePath';
import { RootState } from 'src/redux/redux-store';

const StartPage: FC = () => {
  const { isAuth, userId } = useSelector((state: RootState) => state.auth);
  const profilePath = useProfilePath(userId as number);
  if (!isAuth) {
    return <Redirect to="/Login" />;
  }
  if (isAuth) {
    return <Redirect to={profilePath} />;
  }
  return <></>;
};

export default StartPage;
