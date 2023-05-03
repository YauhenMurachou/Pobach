import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from 'src/redux/redux-store';

const Settings: FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  if (!isAuth) {
    return <Redirect to="/Login" />;
  }
  return <h4>Section under development</h4>;
};

export default Settings;
