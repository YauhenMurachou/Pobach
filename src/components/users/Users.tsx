import { ChangeEvent, FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import UserItem from 'src/components/users/UserItem';
import { RootState } from 'src/redux/redux-store';
import { UserType } from 'src/types';

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
    const { t } = useTranslation();
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

    return (
      <div className={classes.wrapper}>
        <div className={classes.header}>
          {t('users.showing')}{' '}
          <span className={classes.number}>{users.length}</span>{' '}
          {t('users.users')}{' '}
          <span className={classes.number}>{totalUsersCount}</span>
          {t('users.registered')}
        </div>
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
        <div className={classes.pagination}>
          <Pagination
            count={pagesCount}
            showFirstButton
            showLastButton
            page={page}
            onChange={handleChange}
            shape="rounded"
          />
        </div>
      </div>
    );
  }
);

export default Users;
