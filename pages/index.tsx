import { useEffect, useState } from 'react';
import Head from 'next/head';

import { INITIAL_QUIZE_STEP, NUMBER_OF_STEPS } from '@/constants/common';
import { progressCounter } from '@/utils/progress-counter';
import { Layout } from '@/components/layout';
import { QuizeForm } from '@/components/quize-form';

export default function Home() {
  const [quizeStep, setQuizeStep] = useState(INITIAL_QUIZE_STEP);
  const [progress, setProgress] = useState(() => {
    const result = progressCounter(NUMBER_OF_STEPS);

    return result;
  });

  useEffect(() => {
    const progress = progressCounter(quizeStep);

    setProgress(progress);
  }, [quizeStep]);

  return (
    <>
      <Head>
        <title>Movie Service</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout progress={progress} resetQuizeStep={setQuizeStep}>
        <QuizeForm quizeStep={quizeStep} changeQuizeStep={setQuizeStep} />
      </Layout>
    </>
  );
}
