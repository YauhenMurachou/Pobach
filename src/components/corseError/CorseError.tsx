import { FC } from 'react';

import styles from './CorseError.module.css';

const CorseError: FC = () => (
  <div className={styles.container}>
    <div className={styles.item}>
      К сожалению, произошла ошибка CORS (Cross-Origin Resource Sharing, рус.
      "Совместное использование ресурсов между разными источниками").
    </div>
    <div className={styles.item}>
      Браузеры всё больше и больше заботятся о безопасности данных, для этого
      заставили все сайты пересесть на https, для этого активировали CORS, и
      сейчас навязывают эти CORS даже для статики, защищают наши куки
    </div>
    <div className={styles.item}>
      {' '}
      Чтобы исправить ошибку, закройте браузер и перезапустите проект
    </div>
  </div>
);

export default CorseError;
