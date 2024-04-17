import { FC } from 'react';
import Image from 'next/image';

import styles from './FetchDataError.module.css';

export const FetchDataError: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={'/images/error-image.png'}
        alt={'Oops, no movie found'}
        width={135}
        height={135}
      />
      <p className={styles.caption}>Oops, no movie found</p>
    </div>
  );
};
