import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import FollowButtons from 'src/components/common/atoms/followButtons/FollowButtons';
import ChangeAvatar from 'src/components/common/molecules/changeAvatar/ChangeAvatar';
import DialogModal from 'src/components/common/molecules/dialogModal/DialogModal';
import Loader from 'src/components/loader/Loader';
import ProfileInfo from 'src/components/profile/myposts/post/profileInfo/ProfileInfo';
import ProfileInfoEditForm from 'src/components/profile/myposts/post/profileInfo/ProfileInfoEditForm';
import ProfileStatus from 'src/components/profile/myposts/post/profileInfo/profilleStatus/ProfileStatus';
import avatar from 'src/images/avatar.png';
import { editProfileThunkCreator } from 'src/redux/profilePageReducer';
import { RootState } from 'src/redux/redux-store';
import {
  followUsersThunkCreator,
  getUsersThunkCreator,
  unfollowUsersThunkCreator,
} from 'src/redux/usersReducer';
import { ProfileType, UserType } from 'src/types';

import classes from './ProfileInfo.module.css';

type Props = {
  profile: ProfileType;
  status: string;
  isOwner: boolean;
  editMode: boolean;
  updateStatus: (status: string) => void;
  sendPhoto: (file: string | Blob) => void;
  setEditMode: Dispatch<SetStateAction<boolean>>;
};

const ProfileInfoContainer: FC<Props> = ({
  profile,
  sendPhoto,
  isOwner,
  status,
  updateStatus,
  editMode,
  setEditMode,
}) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const toggleEditMode = () => setEditMode((prevState) => !prevState);
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

  const handleProfileInfoEdit = (formData: ProfileType) => {
    dispatch(editProfileThunkCreator(formData));
    setEditMode(false);
  };

  if (!profile) {
    return <Loader />;
  }

  const info = Object.getOwnPropertyNames(profile);

  return (
    <div className={classes.container}>
      {!editMode && (
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
      )}
      <div className={classes.infoContainer}>
        {!editMode && <ProfileInfo profile={profile} />}
        {editMode && (
          <ProfileInfoEditForm
            info={info}
            profile={profile}
            onSubmit={handleProfileInfoEdit}
            toggleEditMode={toggleEditMode}
          />
        )}
        {isOwner && !editMode && (
          <Button variant="contained" onClick={toggleEditMode}>
            {t('profile.edit')}
          </Button>
        )}
      </div>
      <DialogModal
        isOpen={isDialogOpen}
        handleClose={handleDialogOpen}
        companion={user as UserType}
      />
    </div>
  );
};

export default ProfileInfoContainer;
