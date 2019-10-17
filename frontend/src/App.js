import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Loading, ScrollToTop } from './atoms';
import { ApiProvider } from './utils/api';
import { AuthProvider } from './utils/auth';
import { Routes } from './Routes';

export function App() {
  return (
    <AllProviders>
      <Routes />
    </AllProviders>
  );
}

function AllProviders({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <AuthProvider>
        <ApiProvider>
          <BrowserRouter>
            <ScrollToTop />
            {children}
          </BrowserRouter>
        </ApiProvider>
      </AuthProvider>
    </Suspense>
  );
}
