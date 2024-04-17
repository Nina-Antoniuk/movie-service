import { FC } from 'react';
import Image from 'next/image';

import { Button } from '../button';

import styles from './Movie.module.css';

interface Props {
  movieInfo: unknown;
}
export const Movie: FC<Props> = ({ movieInfo }) => {
  console.log('movieInfo', movieInfo);

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image src={'/images/error-image.png'} alt={''} fill={true} />
      </div>
      <p>caption</p>
      <p>year</p>
      <div className="buttonWrapper">
        <Button
          text="Continue"
          type="button"
          action={() => console.log('click')}
        />
      </div>
    </div>
  );
};
