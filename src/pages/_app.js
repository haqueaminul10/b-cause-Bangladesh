import '@/styles/globals.css';
import { I18nProvider } from '../../I18nProvider';

export default function App({ Component, pageProps }) {
  return (
    <I18nProvider>
      <Component {...pageProps} />
    </I18nProvider>
  );
}
