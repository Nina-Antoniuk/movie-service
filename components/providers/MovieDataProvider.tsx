import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';

import { MovieDataList } from '@/types/movie-data';

export type MovieDataContextType = null | {
  movieList: MovieDataList;
  movieListError: string;
  setMovieList: Dispatch<SetStateAction<MovieDataList>>;
  setMovieListError: Dispatch<SetStateAction<string>>;
};

export const MovieDataContext = createContext<MovieDataContextType>(null);

interface Props {
  children: ReactNode;
}

export const MovieDataProvider: FC<Props> = ({ children }) => {
  const [movieList, setMovieList] = useState<MovieDataList>(
    {} as MovieDataList
  );

  const [movieListError, setMovieListError] = useState<string>('');

  const movies = useMemo(
    () => ({
      movieList,
      setMovieList,
      movieListError,
      setMovieListError,
    }),
    [movieList, movieListError]
  );

  return (
    <MovieDataContext.Provider value={movies}>
      {children}
    </MovieDataContext.Provider>
  );
};
