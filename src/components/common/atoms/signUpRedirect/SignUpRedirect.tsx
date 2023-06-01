import { Tooltip } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './SignUpRedirect.module.css';

const SignUpRedirect: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.redirect}>
      <span>{t('login.account')}</span>
      <Tooltip title={t('login.redirect') as string} arrow placement="bottom">
        <a
          href="https://social-network.samuraijs.com/signUp"
          className={styles.registration}
          target="_blank"
          rel="noreferrer"
        >
          {t('login.registration')}
        </a>
      </Tooltip>
    </div>
  );
};

export default SignUpRedirect;
