import useUser from 'hooks/useUser';
import { createContext, useContext } from 'react';

interface IAuthContext {
  isLogin: boolean;
  user: {
    id: string;
    email: string;
  } | null;
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
        user: data,
        isLogin: Boolean(!isLoading && data),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
