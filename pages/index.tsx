import Head from 'next/head';

import { QuizeForm } from '@/components/quize-form';
import { Layout } from '@/components/layout';
import { useState } from 'react';

export default function Home() {
  const [progress, setProgress] = useState('10%');
  return (
    <>
      <Head>
        <title>Movie Service</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout progress="progress">
        <QuizeForm />
      </Layout>
    </>
  );
}
