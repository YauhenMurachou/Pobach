import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ThreePIcon from '@mui/icons-material/ThreeP';
import { Button } from '@mui/material';
import avatar from 'src/images/avatar.png';
import { UserType } from 'src/types';

import classes from './Users.module.css';

export type Props = {
  followingInProgress: number[];
  unfollowUsers: (id: number) => void;
  followUsers: (id: number) => void;
  user: UserType;
};

const UserItem: FC<Props> = memo(
  ({ followingInProgress, unfollowUsers, followUsers, user }) => (
    <div className={classes.item}>
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
            Message
          </NavLink>
        </div>
      </div>
      <div>
        {user.followed ? (
          <Button
            variant="contained"
            startIcon={<PersonRemoveIcon />}
            disabled={followingInProgress.some(
              (id: UserType['id']) => id === user.id
            )}
            onClick={() => {
              unfollowUsers(user.id);
            }}
            color="info"
          >
            {/* {t('avatar.change')} */}
            Unfollow
          </Button>
        ) : (
          <Button
            variant="contained"
            startIcon={<PersonAddIcon />}
            disabled={followingInProgress.some(
              (id: UserType['id']) => id === user.id
            )}
            onClick={() => {
              followUsers(user.id);
            }}
          >
            {/* {t('avatar.change')} */}
            Follow
          </Button>
        )}
      </div>
    </div>
  )
);

export default UserItem;
