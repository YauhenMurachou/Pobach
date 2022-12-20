import React, { ReactNode, useState } from 'react';
import { useDispatch } from 'react-redux';

import Loader from '../../../../loader/Loader';
import ProfileStatus from './profilleStatus/ProfileStatus';
import avatar from '../../../../../images/avatar.png';
import { Button } from '@mui/material';
import ProfileInfoEditForm from './ProfileInfoEditForm';
import { editProfileThunkCreator } from '../../../../../redux/profilePageReducer';
import { ProfileType } from '../../../../../types';

import classes from './ProfileInfo.module.css';

export type Props = {
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

  const handleProfileInfoEdit = (formData: ProfileType) => {
    dispatch(editProfileThunkCreator(formData));
    setEditMode(false);
  };

  if (!profile) {
    return <Loader />;
  }

  const info = Object.getOwnPropertyNames(profile);
  const loadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length) {
      sendPhoto(e.target.files[0]);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.avatarContainer}>
        <div>
          <img
            alt="photos"
            src={profile?.photos?.large ?? avatar}
            className={classes.avatar}
          />
          {isOwner && (
            <div>
              <input type="file" onChange={loadFile} />
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
        {!editMode &&
          info.map((item, index) => {
            if (item === 'fullName' || item === 'photos') {
              return undefined;
            } else if (
              profile[item as keyof typeof profile] &&
              typeof profile[item as keyof typeof profile] !== 'object' &&
              typeof profile[item as keyof typeof profile] !== 'boolean'
            ) {
              return (
                <div key={(item + index).toString()}>
                  <>
                    <span className={classes.property}>{item}: </span>
                    <span className={classes.value}>
                      {profile[item as keyof typeof profile] as ReactNode}
                    </span>
                  </>
                </div>
              );
            } else if (item === 'lookingForAJob' && profile.lookingForAJob) {
              return (
                <div
                  key={(item + index).toString()}
                  className={classes.lookingJob}
                >
                  {' '}
                  I am looking for a job!
                </div>
              );
            } else if (item === 'lookingForAJob' && !profile.lookingForAJob) {
              return <div key={index}> I am NOT looking for a job</div>;
            } else {
              return (
                <div key={(item + index).toString()}>
                  <span className={classes.property}>{item}</span>:
                  {Object.keys(profile['contacts']).map((elem, ind) => {
                    return (
                      <div key={(elem + ind).toString()}>
                        <span className={classes.contact}>{elem}: </span>
                        {profile['contacts'][
                          elem as keyof typeof profile['contacts']
                        ] || ' - '}
                      </div>
                    );
                  })}
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
            Edit info
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
