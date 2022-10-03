import Script from 'next/script';
import 'tailwindcss/tailwind.css';
import 'next-pagination/dist/index.css';
import '../global.css';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  // Use Hotjar
  useEffect(() => {
    hotjar.initialize(3174467, 6);
  }, []);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <Script src='https://scripts.simpleanalyticscdn.com/latest.js' />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src='https://queue.simpleanalyticscdn.com/noscript.gif'
          alt=''
          referrerPolicy='no-referrer-when-downgrade'
        />
      </noscript>
    </>
  );
}
