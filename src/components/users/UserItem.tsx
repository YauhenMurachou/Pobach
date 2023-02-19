import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import ThreePIcon from '@mui/icons-material/ThreeP';
import FollowButtons from 'src/components/users/FollowButtons';
import avatar from 'src/images/avatar.png';
import { UserType } from 'src/types';

import classes from './Users.module.css';

type Props = {
  followingInProgress: number[];
  unfollowUsers: (id: number) => void;
  followUsers: (id: number) => void;
  user: UserType;
};

const UserItem: FC<Props> = memo(
  ({ followingInProgress, unfollowUsers, followUsers, user }) => {
    const { t } = useTranslation();
    return (
      <li className={classes.item}>
        <div className={classes.avatarWrapper}>
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
          <div className={classes.infoWrapper}>
            <NavLink to={'/profile/' + user.id} className={classes.name}>
              {user.name}
            </NavLink>
            {user.status && (
              <div className={classes.status}>
                <ThreePIcon />
                <div>{user.status}</div>
              </div>
            )}
            <span className={classes.id}> id: {user.id} </span>
            <NavLink to={'#'} className={classes.message}>
              {t('users.message')}
            </NavLink>
          </div>
        </div>
        <FollowButtons
          followingInProgress={followingInProgress}
          unfollowUsers={unfollowUsers}
          followUsers={followUsers}
          user={user}
        />
      </li>
    );
  }
);

export default UserItem;
