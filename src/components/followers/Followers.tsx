import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UserItem from 'src/components/users/UserItem';
import { getFollowersAction } from 'src/redux/followersReducer';
import { RootState } from 'src/redux/redux-store';
import {
  followUsersThunkCreator,
  unfollowUsersThunkCreator,
} from 'src/redux/usersReducer';

import classes from './Followers.module.css';

const Followers: FC = () => {
  const { isAuth, isFetching, followers } = useSelector((state: RootState) => ({
    isAuth: state.auth,
    isFetching: state.users.isFetching,
    followers: state.followers.followers,
  }));

  const followingInProgress = useSelector(
    (state: RootState) => state.users.followingInProgressUsers
  );
  const dispatch = useDispatch();

  const unfollow = (id: number) => {
    dispatch(unfollowUsersThunkCreator(id));
    setTimeout(() => {
      dispatch(getFollowersAction());
    }, 200);
  };

  useEffect(() => {
    dispatch(getFollowersAction());
  }, [dispatch]);

  if (!isAuth) {
    return <Redirect to="/Login" />;
  }

  return (
    <div className={classes.wrapper}>
      {!isFetching && (
        <div>
          <div className={classes.header}>All friends({followers.length})</div>
          <ul className={classes.itemWrapper}>
            {followers.map((follower, index) => (
              <UserItem
                user={follower}
                followUsers={() => {
                  dispatch(followUsersThunkCreator(follower.id as number));
                }}
                unfollowUsers={() => unfollow(follower.id as number)}
                followingInProgress={followingInProgress}
                key={index + follower.toString()}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Followers;
