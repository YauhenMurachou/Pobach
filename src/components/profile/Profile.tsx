import React, { memo } from 'react';

import MypostsContainer from './myposts/MypostsContainer';
import ProfileInfo from './myposts/post/profileInfo/ProfileInfo';
import { profileType } from '../../redux/profilePageReducer';

import classes from './Profile.module.css';

export type Props = {
  profile: profileType;
  status: string;
  isOwner: boolean;
  updateStatus: (status: string) => void;
  sendPhoto: (file: any) => void;
};

const Profile: React.FC<Props> = memo(
  ({ profile, status, isOwner, updateStatus, sendPhoto }) => {
    return (
      <div className={classes.content}>
        <ProfileInfo
          profile={profile}
          status={status}
          isOwner={isOwner}
          updateStatus={updateStatus}
          sendPhoto={sendPhoto}
        />
        <MypostsContainer />
      </div>
    );
  }
);

export default Profile;
