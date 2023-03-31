import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UsersPagination from 'src/components/common/atoms/usersPagination/UsersPagination';
import EmptyState from 'src/components/common/molecules/EmptyState/EmptyState';
import SearchField from 'src/components/users/SearchField';
import UserItem from 'src/components/users/UserItem';
import { useSearch } from 'src/hooks/useSearch';
import { RootState } from 'src/redux/redux-store';
import { UserType } from 'src/types';

import classes from './Users.module.css';

type Props = {
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
    const [page, setPage] = useState(1);
    const { isAuth } = useSelector((state: RootState) => state.auth);
    const isFetching = useSelector(
      (state: RootState) => state.users.isFetching
    );
    const { t } = useTranslation();

    const { setSearchValue, searchValue } = useSearch(
      getUsers,
      currentPage,
      pageSize
    );

    const isSearch = searchValue.length ? true : false;

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

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
            <SearchField
              placeholder={t('users.search')}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
              isSearch={isSearch}
            />
            <ul className={classes.itemWrapper}>
              {users.map((user: UserType, index) => (
                <UserItem
                  user={user}
                  followUsers={followUsers}
                  unfollowUsers={unfollowUsers}
                  followingInProgress={followingInProgress}
                  key={index + user.toString()}
                />
              ))}
            </ul>
            {pagesCount > 1 && (
              <UsersPagination
                pagesCount={pagesCount}
                currentPage={page}
                handlePageChange={onPageChange}
                setPage={setPage}
              />
            )}
            {isSearch && !users.length && (
              <EmptyState text={t('users.nothing')} />
            )}
          </>
        )}
      </div>
    );
  }
);

export default Users;
