import type { AppProps } from 'next/app';
import { Noto_Sans } from 'next/font/google';

import { QuizeFormProvider } from '@/components/providers/QuizeStepProvider';
import { MovieDataProvider } from '@/components/providers/MovieDataProvider';

import '@/globals.css';

const notoSans = Noto_Sans({
  weight: ['400', '600', '900'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QuizeFormProvider>
      <MovieDataProvider>
        <div className={notoSans.className}>
          <Component {...pageProps} />
        </div>
      </MovieDataProvider>
    </QuizeFormProvider>
  );
}
