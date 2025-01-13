import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from './useStorageState';

const AuthContext = createContext<{
  signin: () => void;
  register: (key: string) => void;
  signOut: () => void;
  session?: string | null;
  password?: string | null;
  isLoading: boolean;
}>({
  signin: () => null,
  register: () => null,
  signOut: () => null,
  session: null,
  password: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  return useContext(AuthContext)
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');
  const [[loadingPass, password], setPassword] = useStorageState('user-password')

  return (
    <AuthContext.Provider
      value={{
        signin: () => {
          setSession('xxx')
        },
        register: (key) => {
          setSession('xxx');
          setPassword(key)
        },
        signOut: () => {
          setSession(null);
        },
        session,
        password,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
