import { Dispatch, FC, SetStateAction } from 'react';
import Image from 'next/image';

import { INITIAL_QUIZE_STEP } from '@/constants/common';

import { Button } from '../button';

import styles from './MovieList.module.css';

interface Props {
  cangeQuizeStep: Dispatch<SetStateAction<number>>;
  movieInfo: {
    Search: {
      Poster: string;
      Title: string;
      Year: string;
      [key: string]: any;
    }[];
  } | null;
}
export const MovieList: FC<Props> = ({ movieInfo, cangeQuizeStep }) => {
  const movieList = movieInfo!.Search;

  const handleComplite = () => {
    cangeQuizeStep(INITIAL_QUIZE_STEP);
  };

  return (
    <ul className={styles.movieList}>
      {movieList.map(movie => {
        return (
          <li key={movie.Title} className={styles.movieListitem}>
            <div className={styles.imageWrapper}>
              <Image src={movie.Poster} alt={movie.Title} fill={true} />
            </div>
            <p className={styles.movieTitle}>{movie.Title}</p>
            <p>{movie.Year}</p>
            <div className="buttonWrapper">
              <Button text="Complete" type="button" action={handleComplite} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
