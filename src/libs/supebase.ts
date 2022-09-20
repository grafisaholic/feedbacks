import { createClient, Session } from '@supabase/supabase-js';

const supebaseURL = process.env.NEXT_PUBLIC_SUPEBASE_URL || '';
const supebaseKey = process.env.NEXT_PUBLIC_SUPEBASE_API_KEY || '';

export const supebase = createClient(supebaseURL, supebaseKey);

export const setSessionToServer = async (
  event: string,
  session: Session | null
): Promise<void> => {
  await fetch('/api/auth/set-session', {
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    method: 'POST',
    body: JSON.stringify({ event, session }),
  });
};

export const loginWithgoogle = async (): Promise<any> => {
  return await supebase.auth.signIn({ provider: 'google' });
};
