import { Session } from '@supabase/supabase-js';
import { supebase } from '~/libs/supebase';

const defaultFetchWithAuthOption = () => {
  const currentSession: Session | null = supebase.auth.session();

  let headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (currentSession) {
    headers = {
      ...headers,
      Authorization: `Bearer ${currentSession?.access_token}`,
    };
  }

  return {
    headers: new Headers(headers),
    credentials: 'same-origin',
  };
};

export const fetcherWithAuth = (url: string, opts?: any) =>
  fetch(url, {
    ...defaultFetchWithAuthOption(),
    ...opts,
  }).then((r) => r.json());
