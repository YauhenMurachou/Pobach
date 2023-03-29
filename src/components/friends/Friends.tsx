import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Pagination } from '@mui/material';
import Loader from 'src/components/loader/Loader';
import SearchField from 'src/components/users/SearchField';
import UserItem from 'src/components/users/UserItem';
import { useSearch } from 'src/hooks/useSearch';
import { RootState } from 'src/redux/redux-store';
import {
  followUsersThunkCreator,
  getUsersThunkCreator,
  unfollowUsersThunkCreator,
} from 'src/redux/usersReducer';

import classes from './Friends.module.css';

const Friends: FC = () => {
  const dispatch = useDispatch();
  const { isAuth, isFetching, friends, followingInProgress, pageSize } =
    useSelector((state: RootState) => ({
      isAuth: state.auth,
      isFetching: state.users.isFetching,
      pageSize: state.users.pageSize,
      friends: state.users.users,
      followingInProgress: state.users.followingInProgressUsers,
    }));
  const { t } = useTranslation();
  const pagesCount = Math.ceil(friends.length / pageSize);
  const [page, setPage] = useState(1);
  const getFriends = (
    currentPage: number,
    pageSize: number,
    name?: string,
    isFriend?: boolean
  ) => dispatch(getUsersThunkCreator(currentPage, pageSize, name, isFriend));

  const onPageChange = (pageNumber: number) => {
    dispatch(getUsersThunkCreator(pageNumber, pageSize, undefined, true));
  };

  const { setSearchValue, searchValue } = useSearch(
    getFriends,
    page,
    pageSize,
    true
  );

  const isSearch = searchValue.length ? true : false;

  const handleChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
    onPageChange(page);
  };

  const unfollow = (id: number) => {
    dispatch(unfollowUsersThunkCreator(id));
  };

  useEffect(() => {
    dispatch(getUsersThunkCreator(page, 100, undefined, true));
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
          <SearchField
            placeholder={t('users.search')}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            isSearch={isSearch}
          />
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
          <div className={classes.pagination}>
            {pagesCount > 1 && (
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
        </div>
      )}
    </div>
  );
};

export default Friends;
