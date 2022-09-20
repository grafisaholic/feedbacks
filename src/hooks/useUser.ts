import useSWR from 'swr';

import { fetcherWithAuth } from '~/utils/fetcher';

function useUser() {
  const { data, error } = useSWR('/api/auth/is-authenticated', fetcherWithAuth);

  const isLoading = !error && !data;
  const isLogin = !isLoading && data && data.isLogin;
  const isError = !isLoading && data && data.error && data.error.message;

  return {
    data: isLogin ? data : null,
    isLoading,
    isError: Boolean(error || isError),
  };
}

export default useUser;
