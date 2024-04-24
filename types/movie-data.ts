import { Dispatch, SetStateAction } from 'react';

type MovieData = {
  Poster: string;
  Title: string;
  Year: string;
  [key: string]: any;
};

export type MovieDataList = {
  Search: MovieData[];
  [key: string]: any;
};
