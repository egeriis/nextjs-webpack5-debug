import '@p/dist/styles.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import enTranslations from '@p/locales/en.json';
import { AppProvider } from '@p';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider i18n={enTranslations}>
      <Component {...pageProps} />
    </AppProvider>
  );
}
export default MyApp
