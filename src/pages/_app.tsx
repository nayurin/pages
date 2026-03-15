import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { initReactI18next } from 'react-i18next';
import i18nResources from '../i18n';
import { theme } from '../styles/theme';
import '../styles/globals.css';

i18n
  .use(initReactI18next)
  .init({
    lng: 'zh',
    supportedLngs: ['en', 'zh'],
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: i18nResources
  });

export default function App({
    Component,
    pageProps
}: Readonly<{
    Component: React.ComponentType;
    pageProps: React.HTMLAttributes<HTMLElement>;
}>) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </I18nextProvider>
  );
}
