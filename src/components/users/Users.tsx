import React, { memo, useState, ChangeEvent } from 'react';
import { NavLink } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import avatar from '../../../src/images/avatar.png';
import { UserType } from '../../types';

import classes from './Users.module.css';

export type Props = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  users: UserType[];
  followingInProgress: number[];
  onPageChange: (value: number) => void;
  unfollowUsers: (id: number) => void;
  followUsers: (id: number) => void;
};

const Users: React.FC<Props> = memo(
  ({
    totalUsersCount,
    pageSize,
    // currentPage,
    users,
    followingInProgress,
    onPageChange,
    unfollowUsers,
    followUsers,
  }) => {
    const [page, setPage] = useState(1);

    const handleChange = (event: ChangeEvent<unknown>, page: number) => {
      console.log(event, page);
      setPage(page);
      onPageChange(page);
    };
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <>
        <div className={classes.itemWrapper}>
          {users.map((user: UserType, index) => (
            <div key={index + user.toString()} className={classes.item}>
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
                      (id: UserType['id'] | UserType) => id === user.id
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
                      (id: UserType['id'] | UserType) => id === user.id
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
          ))}
        </div>
        <div>
          <Pagination
            count={pagesCount}
            showFirstButton
            showLastButton
            page={page}
            onChange={handleChange}
          />
        </div>
      </>
    );
  }
);

export default Users;
