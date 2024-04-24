import { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react';
import Image from 'next/image';

import { Ganres } from '@/types/ganres';

import styles from './GenreList.module.css';

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

  const handleClickItemElement: MouseEventHandler<HTMLLIElement> = e => {
    changeGanre(
      (e.currentTarget.children[2].children[0] as HTMLInputElement)
        .value as Ganres
    );
  };

  return (
    <li className={styles.generListItem} onClick={handleClickItemElement}>
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
    </li>
  );
};
