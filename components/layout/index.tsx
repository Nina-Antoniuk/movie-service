import { FC, ReactNode } from 'react';
import Image from 'next/image';

import { ProgressBar } from '../progress-bar';
import styles from './Layout.module.css';

interface Props {
  progress: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Image src="/images/back.svg" alt="menu" width={20} height={20} />
        <Image src="/images/menu.svg" alt="menu" width={20} height={20} />
        <ProgressBar />
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
};
