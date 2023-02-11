import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import Loader from 'src/components/loader/Loader';
import ChangeAvatar from 'src/components/profile/myposts/post/profileInfo/changeAvatar/ChangeAvatar';
import ProfileInfo from 'src/components/profile/myposts/post/profileInfo/ProfileInfo';
import ProfileInfoEditForm from 'src/components/profile/myposts/post/profileInfo/ProfileInfoEditForm';
import ProfileStatus from 'src/components/profile/myposts/post/profileInfo/profilleStatus/ProfileStatus';
import avatar from 'src/images/avatar.png';
import { editProfileThunkCreator } from 'src/redux/profilePageReducer';
import { ProfileType } from 'src/types';

import classes from './ProfileInfo.module.css';

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
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode((prevState) => !prevState);
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
    </div>
  );
};

export default ProfileInfoContainer;
