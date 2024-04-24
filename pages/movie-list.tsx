import Head from 'next/head';

import { MovieListContent } from '@/components/page-content/movie-list';

export default function MoviesList() {
  return (
    <>
      <Head>
        <title>Movie Service</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MovieListContent />
    </>
  );
}
