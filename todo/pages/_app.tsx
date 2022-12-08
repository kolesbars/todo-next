import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>TODOS</title>
        <link rel="icon" href="./icon.png" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
