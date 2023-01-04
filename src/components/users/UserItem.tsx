import React, { memo, FC } from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../../src/images/avatar.png';
import { UserType } from '../../types';

import classes from './Users.module.css';

export type Props = {
  followingInProgress: number[];
  unfollowUsers: (id: number) => void;
  followUsers: (id: number) => void;
  user: UserType;
};

const UserItem: FC<Props> = memo(
  ({ followingInProgress, unfollowUsers, followUsers, user }) => {
    return (
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
            >
              follow
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default UserItem;
