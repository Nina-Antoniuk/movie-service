import { useContext } from 'react';

import { INITIAL_QUIZE_STEP, LAST_QUIZE_STEP } from '@/constants/common';
import { fetchMovieInfo } from '@/utils/fetch-movie';
import { inputValidation } from '@/utils/input-validation';

import { QuizeStepContext } from '@/components/providers/QuizeStepProvider';
import { MovieDataContext } from '@/components/providers/MovieDataProvider';
import { UserInputValueContext } from '@/components/providers/UserInputValueProvider';

import { GenerList } from '@/components/gener-list';
import { MovieNameInput } from '@/components/movie-name-input';
import { useRouter } from 'next/router';

export const QuizeForm = () => {
  const quizeStepContext = useContext(QuizeStepContext);
  const userInputValueContext = useContext(UserInputValueContext);
  const movieListContext = useContext(MovieDataContext);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userInputValueContext) {
      const isValidValue = inputValidation(userInputValueContext.inputValue);

      if (isValidValue) {
        fetchMovieInfo(userInputValueContext?.inputValue)
          .then(data => {
            if (data.Search) {
              movieListContext?.setMovieList(data);
            } else {
              movieListContext?.setMovieListError(data.Error);
            }
          })
          .catch(error => {
            throw new Error(error);
          })
          .finally(() => {
            quizeStepContext?.setQuizeStep(prevState => prevState + 1);
            userInputValueContext.setInputValue('');
            router.push('/movie-list');
          });
      }
    }
  };

  return (
    <form className="quizeForm" onSubmit={handleSubmit}>
      {quizeStepContext?.quizeStep === INITIAL_QUIZE_STEP ? (
        <GenerList />
      ) : (
        <MovieNameInput />
      )}
    </form>
  );
};
