import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import { AuthProvider } from 'context/Auth';
import { setSessionToServer, supebase } from '~/libs/supebase';

import '../../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const { data: authListener } = supebase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN') {
          await setSessionToServer(event, session);
        }
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
