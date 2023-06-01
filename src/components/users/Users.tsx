import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Popper from 'src/components/common/atoms/popper/Popper';
import SearchField from 'src/components/common/atoms/searchField/SearchField';
import UsersPagination from 'src/components/common/atoms/usersPagination/UsersPagination';
import DialogModal from 'src/components/common/molecules/dialogModal/DialogModal';
import EmptyState from 'src/components/common/molecules/EmptyState/EmptyState';
import UserItem from 'src/components/common/molecules/userItem/UserItem';
import { useSearch } from 'src/hooks/useSearch';
import { RootState } from 'src/redux/redux-store';
import { UserType } from 'src/types';
import {
  calculatePagesCount,
  getUsers as getUsersHandler,
} from 'src/utils/users';
import { v4 as uuidv4 } from 'uuid';

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
  }) => {
    const [page, setPage] = useState(1);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [isPopperOpen, setPopperOpen] = useState(false);
    const [companion, setCompanion] = useState<UserType>();
    const { isAuth } = useSelector((state: RootState) => state.auth);
    const isFetching = useSelector(
      (state: RootState) => state.users.isFetching
    );
    const { t } = useTranslation();

    const { setSearchValue, searchValue } = useSearch(
      getUsersHandler,
      currentPage,
      pageSize
    );

    const handleDialogOpen = (companion?: UserType) => {
      setDialogOpen(true);
      setCompanion(companion);
    };

    const handleDialogClose = () => {
      setDialogOpen(false);
    };

    const pagesCount = calculatePagesCount(totalUsersCount, pageSize);

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
              isSearch={!!searchValue}
            />
            <ul className={classes.itemWrapper}>
              {users.map((user: UserType) => (
                <UserItem
                  user={user}
                  followUsers={followUsers}
                  unfollowUsers={unfollowUsers}
                  followingInProgress={followingInProgress}
                  handleDialogOpen={() => handleDialogOpen(user)}
                  key={uuidv4()}
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
            {!!searchValue && !users.length && (
              <EmptyState text={t('users.nothing')} />
            )}
          </>
        )}
        <DialogModal
          isOpen={isDialogOpen}
          handleClose={handleDialogClose}
          setPopperOpen={setPopperOpen}
          companion={companion as UserType}
        />
        <Popper
          isOpen={isPopperOpen}
          placement="bottom-start"
          anchorEl={document.body}
          handleClose={() => setPopperOpen(false)}
          companion={companion as UserType}
        />
      </div>
    );
  }
);

export default Users;
