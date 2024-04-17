import { Dispatch, FC, SetStateAction, useState } from 'react';
import Cookies from 'js-cookie';

import { Ganres } from '@/types/ganres';

import { Button } from '../button';

import { genreList } from './constants';
import { GenerListItem } from './GenreListItem';
import styles from './GenreList.module.css';

interface Props {
  changeQuizeStep: Dispatch<SetStateAction<number>>;
}

export const GenerList: FC<Props> = ({ changeQuizeStep }) => {
  const [ganre, setGanre] = useState<null | Ganres>(null);

  const handleButtonClick = () => {
    changeQuizeStep(2);
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
        <Button text="Continue" action={handleButtonClick} />
      </div>
    </div>
  );
};
