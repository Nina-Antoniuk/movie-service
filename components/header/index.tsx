import Image from 'next/image';
import { FC, useState } from 'react';

import { ProgressBar } from '../progress-bar';
import styles from './Header.module.css';

interface Props {
  progress: string;
}

export const Header: FC<Props> = ({ progress }) => {
  const [quizeStep, setQuizeStep] = useState(1);

  return (
    <header className={styles.header}>
      <Image src="/images/back.svg" alt="menu" width={20} height={20} />
      <Image src="/images/menu.svg" alt="menu" width={20} height={20} />
      <ProgressBar />
    </header>
  );
};
