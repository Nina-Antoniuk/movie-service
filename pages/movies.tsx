import Head from 'next/head';

import { Layout } from '@/components/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Movie Service</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <p>movies list</p>
      </Layout>
    </>
  );
}
