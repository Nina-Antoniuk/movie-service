import { Noto_Sans } from 'next/font/google';

import '@/globals.css';
import type { AppProps } from 'next/app';

const notoSans = Noto_Sans({
  weight: ['400', '600', '900'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={notoSans.className}>
      <Component {...pageProps} />
    </div>
  );
}
