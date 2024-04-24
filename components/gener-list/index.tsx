import { FC, useContext, useState } from 'react';
import Cookies from 'js-cookie';

import { Ganres } from '@/types/ganres';

import { Button } from '../button';

import { genreList } from './constants';
import { GenerListItem } from './GenreListItem';
import styles from './GenreList.module.css';
import { QuizeStepContext } from '../providers/QuizeStepProvider';

export const GenerList: FC = () => {
  const quizeStepContext = useContext(QuizeStepContext);

  const [ganre, setGanre] = useState<null | Ganres>(null);

  const handleButtonClick = () => {
    quizeStepContext?.setQuizeStep(prevState => prevState + 1);

    if (ganre) {
      Cookies.set('movi ganre', ganre);
    }
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
              ganre={ganre}
              changeGanre={setGanre}
            />
          );
        })}
      </ul>
      <div className="buttonWrapper">
        <Button
          text="Continue"
          isDisabled={!ganre}
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};
