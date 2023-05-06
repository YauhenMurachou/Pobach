import { FC } from 'react';

import styles from './Loader.module.css';

type Props = {
  isFetching?: boolean;
};

const Loader: FC<Props> = ({ isFetching }) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      {isFetching && <div className={styles.loader}></div>}
    </div>
  </div>
);

export default Loader;
