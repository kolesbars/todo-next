import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import Layout from '../components/layout/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </Provider>
  );
}
