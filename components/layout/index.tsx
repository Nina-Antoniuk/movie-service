import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import Image from 'next/image';

import styles from './Layout.module.css';

interface Props {
  progress: number;
  resetQuizeStep: Dispatch<SetStateAction<number>>;
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children, progress, resetQuizeStep }) => {
  const roundedPercentage = Math.floor(progress);

  const handleBackButtonClick = () => {
    resetQuizeStep(1);
  };

  return (
    <>
      <header className={styles.header}>
        <button
          type="button"
          className={styles.backButton}
          disabled={progress < 40}
          onClick={handleBackButtonClick}
        >
          <Image
            src={progress < 40 ? '/images/back.svg' : '/images/back-active.svg'}
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
      <main className={styles.main}>{children}</main>
    </>
  );
};
