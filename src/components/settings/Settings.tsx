import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/redux-store';
import { Redirect } from 'react-router-dom';

const Settings: FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  if (!isAuth) {
    return <Redirect to="/Login" />;
  }
  return (
    <div>
      <div>Settings</div>
    </div>
  );
};

export default Settings;
