import React, { memo } from 'react';
import MypostsContainer from 'src/components/profile/myposts/MypostsContainer';
import ProfileInfo from 'src/components/profile/myposts/post/profileInfo/ProfileInfo';
import { ProfileType } from 'src/types';

import classes from './Profile.module.css';

export type Props = {
  profile: ProfileType;
  status: string;
  isOwner: boolean;
  updateStatus: (status: string) => void;
  sendPhoto: (file: string | Blob) => void;
};

const Profile: React.FC<Props> = memo(
  ({ profile, status, isOwner, updateStatus, sendPhoto }) => (
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
  )
);

export default Profile;
