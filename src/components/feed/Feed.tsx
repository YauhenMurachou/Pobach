import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/redux-store';
import { Redirect } from 'react-router-dom';

const Feed: FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  if (!isAuth) {
    return <Redirect to="/Login" />;
  }
  return (
    <div>
      <div>Feed</div>
    </div>
  );
};

export default Feed;
