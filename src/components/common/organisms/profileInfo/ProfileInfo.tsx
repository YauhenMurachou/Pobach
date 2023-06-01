import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileType } from 'src/types';
import { v4 as uuidv4 } from 'uuid';

import classes from './ProfileInfo.module.css';

type Props = {
  profile: ProfileType;
};

const ProfileInfo: FC<Props> = ({ profile }) => {
  const { t } = useTranslation();
  const info = Object.getOwnPropertyNames(profile);

  return (
    <div className={classes.info}>
      {info.map((item) => {
        if (
          item === 'fullName' ||
          item === 'photos' ||
          (item === 'lookingForAJobDescription' && !profile.lookingForAJob)
        ) {
          return undefined;
        } else if (profile[item as keyof ProfileType] === null) {
          return (
            <div key={uuidv4()}>
              <span className={classes.property}>{item}: </span>
              <span className={classes.value}>-</span>
            </div>
          );
        } else if (
          profile[item as keyof ProfileType] &&
          typeof profile[item as keyof ProfileType] !== 'object' &&
          typeof profile[item as keyof ProfileType] !== 'boolean'
        ) {
          return (
            <div key={uuidv4()}>
              <span className={classes.property}>{item}: </span>
              <span className={classes.value}>
                {profile[item as keyof ProfileType] as ReactNode}
              </span>
            </div>
          );
        } else if (item === 'lookingForAJob' && profile.lookingForAJob) {
          return (
            <div key={uuidv4()} className={classes.lookingJob}>
              {t('profile.looking')}
            </div>
          );
        } else if (item === 'lookingForAJob' && !profile.lookingForAJob) {
          return <div key={uuidv4()}>{t('profile.notLooking')}</div>;
        } else {
          return (
            <div key={uuidv4()}>
              <span className={classes.property}>{item}</span>:
              {Object.keys(profile['contacts']).map((elem) => (
                <div key={uuidv4()}>
                  <span className={classes.contact}>{elem}: </span>
                  {profile['contacts'][elem as keyof ProfileType['contacts']] ||
                    ' - '}
                </div>
              ))}
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProfileInfo;
