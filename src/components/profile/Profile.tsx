import { FC, memo } from 'react';

import MypostsContainer from 'src/components/profile/myposts/MypostsContainer';
import ProfileInfoContainer from 'src/components/profile/profileInfoContainer/ProfileInfoContainer';
import { ProfileType } from 'src/types';

import classes from './Profile.module.css';

type Props = {
  profile: ProfileType;
  status: string;
  isOwner: boolean;
  updateStatus: (status: string) => void;
  sendPhoto: (file: string | Blob) => void;
};

const Profile: FC<Props> = memo(
  ({ profile, status, isOwner, updateStatus, sendPhoto }) => (
    <div className={classes.content}>
      <ProfileInfoContainer
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
