'use client';
import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

let rootElement;

if (isBrowser) {
  rootElement = document.getElementById('__next');
}

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'Inter', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#ff7f00',
    },
    secondary: {
      main: '#fff',
    },
  },
});

function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]',
    );

    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: 'css', insertionPoint, prepend: true });
}

export { theme, createEmotionCache };
