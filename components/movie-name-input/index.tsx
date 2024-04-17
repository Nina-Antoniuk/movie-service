import { Dispatch, FC, SetStateAction, useState } from 'react';

import { LAST_QUIZE_STEP } from '@/constants/common';

import { Button } from '../button';

import styles from './MovieNameInput.module.css';
import { inputValidation } from '@/utils/input-validation';
import { fetchMovieInfo } from '@/utils/fetch-movie';

interface Props {
  changeQuizeStep: Dispatch<SetStateAction<number>>;
  setMovieInfo: Dispatch<
    SetStateAction<{
      Search: {
        Poster: string;
        Title: string;
        Year: string;
        [key: string]: any;
      }[];
    } | null>
  >;
  setFetchDataError: Dispatch<SetStateAction<string | null>>;
}

export const MovieNameInput: FC<Props> = ({
  changeQuizeStep,
  setFetchDataError,
  setMovieInfo,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isValidInputValue, setIsValidInputValue] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidValue = inputValidation(inputValue);

    if (isValidValue) {
      fetchMovieInfo(inputValue)
        .then(data => {
          if (data.Search) {
            setMovieInfo(data);
          } else {
            setFetchDataError(data.Error);
          }
        })
        .catch(error => {
          throw new Error(error);
        })
        .finally(() => changeQuizeStep(LAST_QUIZE_STEP));
    } else {
      setIsValidInputValue(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.lable}>
        <span className="labelCaption">Enter movie title</span>
        <input
          type="text"
          className={`${styles.input} ${!isValidInputValue && styles.inputError}`}
          placeholder="Movie title here"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      {!isValidInputValue && (
        <p className={styles.validationErrorText}>
          Only letters and numbers can be entered in this field
        </p>
      )}
      <div className="buttonWrapper">
        <Button
          text="Continue"
          type="submit"
          isDisabled={!inputValue || !isValidInputValue}
          //@ts-ignore
          action={handleSubmit}
        />
      </div>
    </div>
  );
};
