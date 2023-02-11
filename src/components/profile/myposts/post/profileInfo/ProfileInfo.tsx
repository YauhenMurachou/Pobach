import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileType } from 'src/types';

import classes from './ProfileInfo.module.css';

type Props = {
  profile: ProfileType;
};

const ProfileInfo: FC<Props> = ({ profile }) => {
  const { t } = useTranslation();

  const info = Object.getOwnPropertyNames(profile);

  return (
    <>
      {info.map((item, index) => {
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
            <div key={(item + index).toString()} className={classes.lookingJob}>
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
    </>
  );
};

export default ProfileInfo;
