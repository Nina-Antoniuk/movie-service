import { Dispatch, FC, SetStateAction } from 'react';
import Image from 'next/image';

import styles from './GenreList.module.css';
import { Ganres } from '@/types/ganres';

interface Props {
  icon: string;
  caption: string;
  ganre: Ganres | null;
  changeGanre: Dispatch<SetStateAction<Ganres | null>>;
}

export const GenerListItem: FC<Props> = ({
  icon,
  caption,
  ganre,
  changeGanre,
}) => {
  const handleChangeGanre = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeGanre(e.target.value as Ganres);
  };

  return (
    <div className={styles.generListItem}>
      <Image src={icon} alt={caption} width={24} height={24} />
      <span>{caption}</span>
      <label className={styles.radioLabel}>
        <input
          className={styles.radioInput}
          type="radio"
          name="genre"
          value={caption}
          checked={ganre === caption}
          onChange={handleChangeGanre}
        />
      </label>
    </div>
  );
};
