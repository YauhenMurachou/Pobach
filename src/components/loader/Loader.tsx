import React from 'react';

import styles from './Loader.module.css';

export type Props = {
  isFetching?: boolean;
};

const Loader: React.FC<Props> = ({ isFetching }) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      {isFetching && <div className={styles.loader}></div>}
    </div>
  </div>
);

export default Loader;
