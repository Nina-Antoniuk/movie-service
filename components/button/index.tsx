import { FC, MouseEventHandler } from 'react';

import styles from './Button.module.css';

interface Props {
  type?: 'button' | 'submit';
  text: string;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<Props> = ({
  type = 'button',
  text,
  isDisabled = false,
  onClick,
}) => {
  return (
    <button
      className={styles.button}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
