import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import FollowButtons from 'src/components/common/atoms/followButtons/FollowButtons';
import Loader from 'src/components/common/atoms/loader/Loader';
import Popper from 'src/components/common/atoms/popper/Popper';
import ChangeAvatar from 'src/components/common/molecules/changeAvatar/ChangeAvatar';
import DialogModal from 'src/components/common/molecules/dialogModal/DialogModal';
import ProfileStatus from 'src/components/common/molecules/profilleStatus/ProfileStatus';
import ProfileInfo from 'src/components/common/organisms/profileInfo/ProfileInfo';
import avatar from 'src/images/avatar.png';
import { RootState } from 'src/redux/redux-store';
import {
  followUsersThunkCreator,
  getUsersThunkCreator,
  unfollowUsersThunkCreator,
} from 'src/redux/usersReducer';
import { ProfileType, UserType } from 'src/types';

import classes from './ProfileInfoContainer.module.css';

type Props = {
  profile: ProfileType;
  status: string;
  isOwner: boolean;
  updateStatus: (status: string) => void;
  sendPhoto: (file: string | Blob) => void;
};

const ProfileInfoContainer: FC<Props> = ({
  profile,
  sendPhoto,
  isOwner,
  status,
  updateStatus,
}) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isPopperOpen, setPopperOpen] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const followingInProgress = useSelector(
    (state: RootState) => state.users.followingInProgressUsers
  );

  const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    !isOwner &&
      profile?.userId &&
      dispatch(getUsersThunkCreator(1, 30, profile.fullName));
  }, [profile]);

  const handleDialogOpen = () => {
    setDialogOpen((prevState) => !prevState);
  };

  const user =
    users && profile?.userId
      ? users.find((user) => user.id === profile.userId)
      : undefined;

  if (!profile) {
    return <Loader />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.avatarContainer}>
        <div>
          <img
            alt="photos"
            src={profile.photos?.large ?? avatar}
            className={classes.avatar}
          />
          {isOwner && (
            <ChangeAvatar
              sendPhoto={sendPhoto}
              isAvatar={!!profile.photos?.large}
            />
          )}
          {!isOwner && (
            <div className={classes.buttons}>
              <FollowButtons
                followingInProgress={followingInProgress}
                unfollowUsers={() => {
                  dispatch(unfollowUsersThunkCreator(user?.id as number));
                }}
                followUsers={() => {
                  dispatch(followUsersThunkCreator(user?.id as number));
                }}
                user={user ?? ({} as UserType)}
              />
              {user?.followed && (
                <Button variant="contained" onClick={handleDialogOpen}>
                  {t('users.message')}
                </Button>
              )}
            </div>
          )}
        </div>
        <div className={classes.statusContainer}>
          <div className={classes.fullName}>{profile.fullName}</div>
          <ProfileStatus
            isOwner={isOwner}
            status={status}
            updateStatus={isOwner ? updateStatus : undefined}
          />
        </div>
      </div>

      <div className={classes.infoContainer}>
        <ProfileInfo profile={profile} />
        {isOwner && (
          <Button variant="contained">
            <NavLink to="/Settings">{t('profile.edit')}</NavLink>
          </Button>
        )}
      </div>
      <DialogModal
        isOpen={isDialogOpen}
        handleClose={handleDialogOpen}
        setPopperOpen={setPopperOpen}
        companion={user as UserType}
      />
      <Popper
        isOpen={isPopperOpen}
        placement="bottom-start"
        anchorEl={document.body}
        handleClose={() => setPopperOpen(false)}
        companion={user as UserType}
      />
    </div>
  );
};

export default ProfileInfoContainer;
