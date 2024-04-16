import { FC } from 'react';

import { Button } from '../button';

import { genreList } from './constants';
import { GenerListItem } from './GenreListItem';
import styles from './GenreList.module.css';

export const GenerList: FC = () => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div className={styles.wrapper}>
      <p className="labelCaption">Your favorite movie genre?</p>
      <ul className={styles.generList}>
        {genreList.map(genre => {
          return (
            <GenerListItem
              key={genre.caption}
              icon={genre.icon}
              caption={genre.caption}
            />
          );
        })}
      </ul>
      <div className="buttonWrapper">
        <Button text="Continue" action={handleClick} />
      </div>
    </div>
  );
};
