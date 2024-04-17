import { FC, MouseEventHandler } from 'react';

import styles from './Button.module.css';

interface Props {
  type?: 'button' | 'submit';
  text: string;
  isDisabled?: boolean;
  action: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<Props> = ({
  type = 'button',
  text,
  isDisabled = false,
  action,
}) => {
  return (
    <button
      className={styles.button}
      type={type}
      disabled={isDisabled}
      onClick={action}
    >
      {text}
    </button>
  );
};
