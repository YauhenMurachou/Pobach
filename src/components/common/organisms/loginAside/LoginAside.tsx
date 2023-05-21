import { FC } from 'react';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Logo from 'src/components/common/atoms/logo/Logo';
import { useTranslateData } from 'src/hooks/useTranslateData';

import styles from './LoginAside.module.css';

const LoginAside: FC = () => {
  const { asideData } = useTranslateData();

  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>
        <Diversity3Icon className={styles.image} fontSize="large" />
        <span className={styles.near}>побач</span>
      </div>
      <ul className={styles.social}>
        {asideData.map(({ icon, text }) => (
          <li className={styles.item} key={text}>
            {icon}
            {text}
          </li>
        ))}
      </ul>
      <Logo color="var(--red-main)" />
    </aside>
  );
};

export default LoginAside;
