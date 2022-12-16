import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/redux-store';
import { Redirect } from 'react-router-dom';

const Photos: FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  if (!isAuth) {
    return <Redirect to="/Login" />;
  }
  return (
    <div>
      <div>Photo</div>
    </div>
  );
};

export default Photos;
