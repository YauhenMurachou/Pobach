import React, { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import Loader from 'src/components/loader/Loader';
import ChangeAvatar from 'src/components/profile/myposts/post/profileInfo/changeAvatar/ChangeAvatar';
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

const ProfileInfo: React.FC<Props> = ({
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
        {!editMode &&
          info.map((item, index) => {
            if (item === 'fullName' || item === 'photos') {
              return undefined;
            } else if (profile[item as keyof typeof profile] === null) {
              return (
                <div key={(item + index).toString()}>
                  <span className={classes.property}>{item}: </span>
                  <span className={classes.value}>-</span>
                </div>
              );
            } else if (
              profile[item as keyof typeof profile] &&
              typeof profile[item as keyof typeof profile] !== 'object' &&
              typeof profile[item as keyof typeof profile] !== 'boolean'
            ) {
              return (
                <div key={(item + index).toString()}>
                  <span className={classes.property}>{item}: </span>
                  <span className={classes.value}>
                    {profile[item as keyof typeof profile] as ReactNode}
                  </span>
                </div>
              );
            } else if (item === 'lookingForAJob' && profile.lookingForAJob) {
              return (
                <div
                  key={(item + index).toString()}
                  className={classes.lookingJob}
                >
                  {t('profile.looking')}
                </div>
              );
            } else if (item === 'lookingForAJob' && !profile.lookingForAJob) {
              return <div key={index}>{t('profile.notLooking')}</div>;
            } else {
              return (
                <div key={(item + index).toString()}>
                  <span className={classes.property}>{item}</span>:
                  {Object.keys(profile['contacts']).map((elem, ind) => (
                    <div key={(elem + ind).toString()}>
                      <span className={classes.contact}>{elem}: </span>
                      {profile['contacts'][
                        elem as keyof typeof profile['contacts']
                      ] || ' - '}
                    </div>
                  ))}
                </div>
              );
            }
          })}
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

export default ProfileInfo;
