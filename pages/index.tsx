import Head from 'next/head';

import { QuizeFormContent } from '@/components/page-content/quize-form';

export default function Home() {
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
      <QuizeFormContent />
    </>
  );
}
