import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { INITIAL_QUIZE_STEP } from '@/constants/common';
import { MovieDataList } from '@/types/movie-data';
import { progressCounter } from '@/utils/progress-counter';

import { QuizeStepContext } from '../providers/QuizeStepProvider';
import { MovieDataContext } from '../providers/MovieDataProvider';

import styles from './Layout.module.css';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  const quizeStepContext = useContext(QuizeStepContext);
  const movieListContext = useContext(MovieDataContext);

  const router = useRouter();

  const [progress, setProgress] = useState(() => {
    return progressCounter(INITIAL_QUIZE_STEP);
  });

  const roundedPercentage = Math.floor(progress);

  const handleBackButtonClick = () => {
    quizeStepContext?.setQuizeStep(prevState => prevState - 1);

    if (router.asPath === '/movie-list') {
      movieListContext?.setMovieList({} as MovieDataList);
      movieListContext?.setMovieListError('');
      router.push('/');
    }
  };

  useEffect(() => {
    if (quizeStepContext) {
      const progress = progressCounter(quizeStepContext?.quizeStep);
      setProgress(progress);
    }
  }, [quizeStepContext]);

  return (
    <div className={styles.bgImage}>
      <div className={styles.componentsWrapper}>
        <header className={styles.header}>
          <button
            type="button"
            className={styles.backButton}
            disabled={progress < 50}
            onClick={handleBackButtonClick}
          >
            <Image
              src={
                progress < 50 ? '/images/back.svg' : '/images/back-active.svg'
              }
              alt="menu"
              width={20}
              height={20}
            />
          </button>
          <span>{roundedPercentage}%</span>
          <button type="button" className={styles.menuButton}>
            <Image src="/images/menu.svg" alt="menu" width={20} height={20} />
          </button>
          <div className={styles.progressBg}>
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};
