import useUser from 'hooks/useUser';
import { User } from '~/types/global';
import { createContext, useContext } from 'react';

interface IAuthContext {
  isLogin: boolean;
  user: User | null;
}

const AuthContext = createContext<IAuthContext>({
  isLogin: false,
  user: null,
});

interface AuthProviderProps {
  children: JSX.Element;
}

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data, isLoading } = useUser();

  return (
    <AuthContext.Provider
      value={{
        user: data?.user,
        isLogin: Boolean(!isLoading && data),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
