import { useEffect, useState } from 'react';
import Head from 'next/head';

import { INITIAL_QUIZE_STEP, LAST_QUIZE_STEP } from '@/constants/common';
import { progressCounter } from '@/utils/progress-counter';
import { Layout } from '@/components/layout';
import { MovieList } from '@/components/movie-list';
import { GenerList } from '@/components/gener-list';
import { MovieNameInput } from '@/components/movie-name-input';
import { FetchDataError } from '@/components/fetch-data-error';

export default function Home() {
  const [quizeStep, setQuizeStep] = useState(INITIAL_QUIZE_STEP);
  const [progress, setProgress] = useState(() => {
    const result = progressCounter(LAST_QUIZE_STEP);

    return result;
  });
  const [fetchDataError, setFetchDataError] = useState<null | string>(null);
  const [movieInfo, setMovieInfo] = useState<null | {
    Search: {
      Poster: string;
      Title: string;
      Year: string;
      [key: string]: any;
    }[];
  }>(null);

  useEffect(() => {
    const progress = progressCounter(quizeStep);

    setProgress(progress);
  }, [quizeStep]);

  useEffect(() => {
    if (fetchDataError && quizeStep !== LAST_QUIZE_STEP) {
      setFetchDataError(null);
    }
  }, [fetchDataError, quizeStep]);

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

      <Layout progress={progress} resetQuizeStep={setQuizeStep}>
        {quizeStep !== LAST_QUIZE_STEP && (
          <form className="quizeForm">
            {quizeStep === INITIAL_QUIZE_STEP ? (
              <GenerList changeQuizeStep={setQuizeStep} />
            ) : (
              <MovieNameInput
                changeQuizeStep={setQuizeStep}
                setMovieInfo={setMovieInfo}
                setFetchDataError={setFetchDataError}
              />
            )}
          </form>
        )}
        {quizeStep === LAST_QUIZE_STEP && (
          <>
            {!fetchDataError ? (
              <MovieList movieInfo={movieInfo} cangeQuizeStep={setQuizeStep} />
            ) : (
              <FetchDataError />
            )}
          </>
        )}
      </Layout>
    </>
  );
}
