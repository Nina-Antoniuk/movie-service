import { FC } from 'react';
import Image from 'next/image';

import styles from './GenreList.module.css';

interface Props {
  icon: string;
  caption: string;
}

export const GenerListItem: FC<Props> = ({ icon, caption }) => {
  return (
    <div className={styles.generListItem}>
      <Image src={icon} alt={caption} width={24} height={24} />
      <span>{caption}</span>
      <label className={styles.radio}>
        <input type="radio" name="genre" />
      </label>
    </div>
  );
};
