import { useState, FC } from 'react';

import { GenerList } from '../gener-list';
import { MovieNameInput } from '../movie-name-input';

import style from './Quize.module.css';

export const QuizeForm: FC = () => {
  const [quizeStep, setQuizeStep] = useState(2);

  return (
    <form className={style.quizeForm}>
      {quizeStep === 1 ? <GenerList /> : <MovieNameInput />}
    </form>
  );
};
