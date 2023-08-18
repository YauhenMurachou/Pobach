import ThreePIcon from '@mui/icons-material/ThreeP';
import { Tooltip } from '@mui/material';
import classNames from 'classnames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import FollowButtons from 'src/components/common/atoms/followButtons/FollowButtons';
import { useProfilePath } from 'src/hooks/useProfilePath';
import avatar from 'src/images/avatar.png';
import { UserType } from 'src/types';

import classes from './UserItem.module.css';

type Props = {
  followingInProgress: number[];
  unfollowUsers: (id: number) => void;
  followUsers: (id: number) => void;
  user: UserType;
  handleDialogOpen: () => void;
};

const UserItem: FC<Props> = memo(
  ({
    followingInProgress,
    unfollowUsers,
    followUsers,
    user,
    handleDialogOpen,
  }) => {
    const { t } = useTranslation();
    const { id, photos, name, status, followed } = user;
    const profilePath = useProfilePath(id);
    return (
      <li className={classes.item}>
        <div className={classes.avatarWrapper}>
          <NavLink to={profilePath}>
            <img
              src={photos && photos.small != null ? photos.small : avatar}
              className={classes.avatar}
              alt="avatar"
            />
          </NavLink>
          <div className={classes.infoWrapper}>
            <NavLink to={profilePath} className={classes.name}>
              {name}
            </NavLink>
            {status && (
              <div className={classes.status}>
                <ThreePIcon />
                <div>{status}</div>
              </div>
            )}
            <span className={classes.id}> id: {id} </span>
            <Tooltip
              title={!followed ? (t('users.onlyFriend') as string) : ''}
              placement="bottom-start"
            >
              <NavLink
                to="#"
                className={classNames(classes.message, {
                  [classes.disabled]: !followed,
                })}
                onClick={followed ? handleDialogOpen : undefined}
              >
                {t('users.message')}
              </NavLink>
            </Tooltip>
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
