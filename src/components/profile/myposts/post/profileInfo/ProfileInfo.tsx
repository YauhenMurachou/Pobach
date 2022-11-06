import React, { useState } from 'react';
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
  // sendPhoto,
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

  // let objProp = profile
  const info = Object.getOwnPropertyNames(profile);
  // const loadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e?.target?.files?.length) {
  //     sendPhoto(e.target.files[0])
  //   }
  // }

  return (
    <>
      <div>
        <img alt="photos" src={avatar} />
        {/* <img alt="photos" src={profile?.photos?.large ?? avatar} /> */}
        {isOwner && (
          <div>{/* <input type="file" onChange={loadFile} /> */}</div>
        )}
      </div>

      <div className={classes.item}>
        <ProfileStatus
          isOwner={isOwner}
          status={status}
          updateStatus={isOwner ? updateStatus : null}
        />
      </div>

      {!editMode &&
        info.map((item, index) => {
          if (
            profile[item as keyof typeof profile] &&
            typeof profile[item as keyof typeof profile] !== 'object' &&
            typeof profile[item as keyof typeof profile] !== 'boolean'
          ) {
            return (
              <div key={index}>
                <>
                  {item}: {profile[item as keyof typeof profile]}
                </>
              </div>
            );
          } else if (item === 'photos') {
            return <span key={index}></span>;
          } else if (item === 'lookingForAJob' && profile.lookingForAJob) {
            return <div> I am looking for a job</div>;
          } else if (item === 'lookingForAJob' && !profile.lookingForAJob) {
            return <div> I am NOT looking for a job</div>;
          } else {
            return (
              <div key={index}>
                {item}:
                {Object.keys(profile['contacts']).map((elem, ind) => {
                  return (
                    <div key={ind}>
                      {elem}:
                      {profile['contacts'][
                        elem as keyof typeof profile['contacts']
                      ] || 'No data'}
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
        />
      )}
      {isOwner && !editMode && (
        <Button variant="contained" onClick={toggleEditMode}>
          Edit info
        </Button>
      )}
    </>
  );
};

export default ProfileInfo;