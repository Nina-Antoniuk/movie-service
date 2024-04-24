import { FC, useContext } from 'react';
import Image from 'next/image';

import { INITIAL_QUIZE_STEP } from '@/constants/common';

import { Button } from '../button';

import styles from './MovieList.module.css';
import { QuizeStepContext } from '../providers/QuizeStepProvider';
import { MovieDataContext } from '../providers/MovieDataProvider';
import { useRouter } from 'next/router';

export const MovieList: FC = () => {
  const quizeStepContext = useContext(QuizeStepContext);
  const movieListContext = useContext(MovieDataContext);

  const router = useRouter();

  const movieListInfo = movieListContext?.movieList.Search || [];

  const handleComplite = () => {
    quizeStepContext?.setQuizeStep(INITIAL_QUIZE_STEP);
    router.push('/');
  };

  return (
    <>
      <ul className={styles.movieList}>
        {movieListInfo.map(movie => {
          return (
            <li key={movie.Title} className={styles.movieListitem}>
              <div className={styles.imageWrapper}>
                <Image src={movie.Poster} alt={movie.Title} fill={true} />
              </div>
              <p className={styles.movieTitle}>{movie.Title}</p>
              <p>{movie.Year}</p>
            </li>
          );
        })}
      </ul>
      <div className="buttonWrapper">
        <Button text="Complete" type="button" onClick={handleComplite} />
      </div>
    </>
  );
};
