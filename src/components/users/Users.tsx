import React, { memo, useState, ChangeEvent, FC } from 'react';
import { Redirect } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { UserType } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/redux-store';
import UserItem from './UserItem';

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

const Users: FC<Props> = memo(
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

    const handleChange = (_event: ChangeEvent<unknown>, page: number) => {
      setPage(page);
      onPageChange(page);
    };
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    const { isAuth } = useSelector((state: RootState) => state.auth);
    if (!isAuth) {
      return <Redirect to="/Login" />;
    }

    const hasFollowed = users.some((user) => user.followed);

    return (
      <>
        <div className={classes.itemWrapper}>
          {users.map((user: UserType, index) => (
            <UserItem
              user={user}
              followUsers={followUsers}
              unfollowUsers={unfollowUsers}
              followingInProgress={followingInProgress}
              key={index + user.toString()}
            />
          ))}
        </div>
        {hasFollowed && (
          <>
            <div>Followers:</div>
            {users.map((user: UserType, index) => (
              <>
                {user.followed && (
                  <UserItem
                    user={user}
                    followUsers={followUsers}
                    unfollowUsers={unfollowUsers}
                    followingInProgress={followingInProgress}
                    key={index + user.toString()}
                  />
                )}
              </>
            ))}
          </>
        )}
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
