import { Dispatch, FC, SetStateAction } from 'react';

import { GenerList } from '../gener-list';
import { MovieNameInput } from '../movie-name-input';

import style from './Quize.module.css';

interface Props {
  quizeStep: number;
  changeQuizeStep: Dispatch<SetStateAction<number>>;
}

export const QuizeForm: FC<Props> = ({ quizeStep, changeQuizeStep }) => {
  return (
    <form className={style.quizeForm}>
      {quizeStep === 1 ? (
        <GenerList changeQuizeStep={changeQuizeStep} />
      ) : (
        <MovieNameInput />
      )}
    </form>
  );
};
