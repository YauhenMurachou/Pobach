import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loader from 'src/components/loader/Loader';
import UserItem from 'src/components/users/UserItem';
import { getFriendsAction } from 'src/redux/friendsReducer';
import { RootState } from 'src/redux/redux-store';
import {
  followUsersThunkCreator,
  getUsersThunkCreator,
  unfollowUsersThunkCreator,
} from 'src/redux/usersReducer';

import classes from './Friends.module.css';

const Friends: FC = () => {
  const { isAuth, isFetching, friends, followingInProgress } = useSelector(
    (state: RootState) => ({
      isAuth: state.auth,
      isFetching: state.users.isFetching,
      friends: state.users.users,
      followingInProgress: state.users.followingInProgressUsers,
    })
  );

  const dispatch = useDispatch();

  const unfollow = (id: number) => {
    dispatch(unfollowUsersThunkCreator(id));
    setTimeout(() => {
      dispatch(getFriendsAction());
    }, 200);
  };

  useEffect(() => {
    dispatch(getUsersThunkCreator(1, 100, undefined, true));
  }, [dispatch]);

  if (!isAuth) {
    return <Redirect to="/Login" />;
  }

  if (isFetching) {
    return <Loader isFetching={isFetching} />;
  }

  return (
    <div className={classes.wrapper}>
      {!isFetching && (
        <div>
          <div className={classes.header}>All friends({friends.length})</div>
          <ul className={classes.itemWrapper}>
            {friends.map((friend, index) => (
              <UserItem
                user={friend}
                followUsers={() => {
                  dispatch(followUsersThunkCreator(friend.id as number));
                }}
                unfollowUsers={() => unfollow(friend.id as number)}
                followingInProgress={followingInProgress}
                key={index + friend.toString()}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Friends;
