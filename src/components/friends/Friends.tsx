import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SearchField from 'src/components/common/atoms/searchField/SearchField';
import UsersPagination from 'src/components/common/atoms/usersPagination/UsersPagination';
import DialogModal from 'src/components/common/molecules/dialogModal/DialogModal';
import EmptyState from 'src/components/common/molecules/EmptyState/EmptyState';
import UserItem from 'src/components/common/molecules/userItem/UserItem';
import Loader from 'src/components/loader/Loader';
import { useSearch } from 'src/hooks/useSearch';
import { getMessagesListAction } from 'src/redux/dialogsReducer';
import { RootState } from 'src/redux/redux-store';
import {
  followUsersThunkCreator,
  getUsersThunkCreator,
  unfollowUsersThunkCreator,
} from 'src/redux/usersReducer';
import { UserType } from 'src/types';
import { calculatePagesCount, getUsers } from 'src/utils/users';

import classes from './Friends.module.css';

const Friends: FC = () => {
  const dispatch = useDispatch();
  const [currentPage, setPage] = useState(1);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [companion, setCompanion] = useState<UserType>();
  const { isAuth, isFetching, friends, followingInProgress, pageSize } =
    useSelector((state: RootState) => ({
      isAuth: state.auth,
      isFetching: state.users.isFetching,
      pageSize: state.users.pageSize,
      friends: state.users.users,
      followingInProgress: state.users.followingInProgressUsers,
    }));
  const { t } = useTranslation();

  useEffect(() => {
    getUsers(dispatch, currentPage, 100, undefined, true);
  }, [dispatch]);

  const handleDialogOpen = (companion?: UserType) => {
    setDialogOpen(true);
    setCompanion(companion);
    dispatch(getMessagesListAction({ id: companion?.id as number }));
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const pagesCount = calculatePagesCount(friends.length, pageSize);

  const { setSearchValue, searchValue } = useSearch(
    getUsers,
    currentPage,
    pageSize,
    true
  );

  const handlePageChange = (pageNumber: number) => {
    dispatch(getUsersThunkCreator(pageNumber, pageSize, undefined, true));
  };

  const unfollow = (id: number) => {
    dispatch(unfollowUsersThunkCreator(id));
  };

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
            isSearch={!!searchValue}
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
                handleDialogOpen={() => handleDialogOpen(friend)}
                key={index + friend.toString()}
              />
            ))}
          </ul>
          {pagesCount > 1 && (
            <UsersPagination
              pagesCount={pagesCount}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              setPage={setPage}
            />
          )}
          {!!searchValue && !friends.length && (
            <EmptyState text={t('users.nothing')} />
          )}
          <DialogModal
            isOpen={isDialogOpen}
            handleClose={handleDialogClose}
            companion={companion as UserType}
          />
        </div>
      )}
    </div>
  );
};

export default Friends;
