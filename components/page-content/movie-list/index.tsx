import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { MovieDataContext } from '@/components/providers/MovieDataProvider';

import { Layout } from '@/components/layout';
import { FetchDataError } from '@/components/fetch-data-error';
import { MovieList } from '@/components/movie-list';

export const MovieListContent = () => {
  const movieListContext = useContext(MovieDataContext);

  const router = useRouter();

  useEffect(() => {
    if (
      !movieListContext?.movieList.Search &&
      !movieListContext?.movieListError
    ) {
      router.push('/');
    }
  }, [
    movieListContext?.movieList.Search,
    movieListContext?.movieListError,
    router,
  ]);

  return (
    <Layout>
      <>
        {!movieListContext?.movieListError ? <MovieList /> : <FetchDataError />}
      </>
    </Layout>
  );
};
