import { ChangeEvent, FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import UserItem from 'src/components/users/UserItem';
import { useSearch } from 'src/hooks/useSearch';
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
  getUsers: (currentPage: number, pageSize: number, name?: string) => void;
};

const Users: FC<Props> = memo(
  ({
    totalUsersCount,
    pageSize,
    currentPage,
    users,
    followingInProgress,
    onPageChange,
    unfollowUsers,
    followUsers,
    getUsers,
  }) => {
    const { setSearchValue, searchValue } = useSearch(
      getUsers,
      currentPage,
      pageSize
    );

    const isSearch = searchValue.length ? true : false;

    const [page, setPage] = useState(1);
    const { isAuth } = useSelector((state: RootState) => state.auth);
    const isFetching = useSelector(
      (state: RootState) => state.usersPage.isFetching
    );
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

    const handleChangeSearch = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      setSearchValue(event.target.value);
    };

    if (!isAuth) {
      return <Redirect to="/Login" />;
    }

    return (
      <div className={classes.wrapper}>
        {!isFetching && (
          <>
            <div className={classes.header}>
              {t('users.showing')}{' '}
              <span className={classes.number}>{users.length}</span>{' '}
              {t('users.users')}{' '}
              <span className={classes.number}>{totalUsersCount}</span>
              {t('users.registered')}
            </div>
            <TextField
              onChange={handleChangeSearch}
              value={searchValue}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              placeholder={t('users.search')}
              fullWidth
              type="search"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ bgcolor: 'white' }}
              autoFocus={isSearch}
            />
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
              {!!users.length && (
                <Pagination
                  count={pagesCount}
                  showFirstButton
                  showLastButton
                  page={page}
                  onChange={handleChange}
                  shape="rounded"
                />
              )}
            </div>
            {isSearch && !users.length && <div>{t('users.nothing')}</div>}
          </>
        )}
      </div>
    );
  }
);

export default Users;
