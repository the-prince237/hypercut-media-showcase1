'use client';

import { createEmotionCache, theme } from '@/theme';
import { CacheProvider } from '@emotion/react';
import { ScopedCssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { initThinBackend } from 'thin-backend';
import { ThinBackend } from 'thin-backend-react';

initThinBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL });

const clientSideEmotionCache = createEmotionCache();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThinBackend requireLogin={false}>
      <CacheProvider value={clientSideEmotionCache}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <ScopedCssBaseline />
            {children}
          </ThemeProvider>
        </StyledEngineProvider>
      </CacheProvider>
    </ThinBackend>
  );
};

export default Providers;
