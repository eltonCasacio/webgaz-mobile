import React, {createContext, useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../service/auth';
import api from '../service/api';

type User = {
  name: string;
  email: string;
};

type SignInProps = {
  username: string;
  password: string;
};

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn({}: SignInProps): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  async function signIn({username, password}) {
    const response = await auth.signIn({username, password});
    setUser(response.user);

    api.defaults.headers['Authorizarion'] = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@webgaz:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@webgaz:token', response.token);
  }

  function signOut() {
    AsyncStorage.clear().then(() => setUser(null));
  }

  useEffect(() => {
    async function loadStorageData() {
      const storageData = await AsyncStorage.multiGet([
        '@webgaz:user',
        '@webgaz:token',
      ]);

      const storageUser = storageData[0][1];
      const storageToken = storageData[0][1];

      if (storageUser && storageToken) {
        api.defaults.headers['Authorizarion'] = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
