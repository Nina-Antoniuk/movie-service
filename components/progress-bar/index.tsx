import { FC } from 'react';

import styles from './ProgressBar.module.css';

export const ProgressBar: FC = () => {
  return (
    // <progress id="" className={styles.progress} max="100" value="70">
    //   70%
    // </progress>
    <div className={styles.progressBg}>
      <div className={styles.progress}></div>
    </div>
  );
};
