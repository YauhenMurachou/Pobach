import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import avatar from 'src/images/avatar.png';
import { UserType } from 'src/types';

import classes from './Users.module.css';

export type Props = {
  followingInProgress: number[];
  unfollowUsers: (id: number) => void;
  followUsers: (id: number) => void;
  user: UserType;
};

const UserItem: FC<Props> = memo(
  ({ followingInProgress, unfollowUsers, followUsers, user }) => (
    <div className={classes.item}>
      <NavLink to={'/profile/' + user.id}>
        <img
          src={
            user.photos && user.photos.small != null
              ? user.photos.small
              : avatar
          }
          className={classes.avatar}
          alt="avatar"
        />
      </NavLink>
      <span> {user.name} </span>
      <span> id: {user.id} </span>
      <span> {user.city} </span>
      <span> {user.country}</span>
      <span> {user.status}</span>
      <div>
        {user.followed ? (
          <button
            disabled={followingInProgress.some(
              (id: UserType['id']) => id === user.id
            )}
            onClick={() => {
              unfollowUsers(user.id);
            }}
            type="submit"
          >
            unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some(
              (id: UserType['id']) => id === user.id
            )}
            onClick={() => {
              followUsers(user.id);
            }}
            type="submit"
          >
            follow
          </button>
        )}
      </div>
    </div>
  )
);

export default UserItem;
