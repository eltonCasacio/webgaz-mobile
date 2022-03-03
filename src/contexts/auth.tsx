import React, {createContext, useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../service/auth';
import api from '../service/api';

import {User, SignInProps as SignInProps} from '../types/Auth';

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn({}: SignInProps): Promise<User>;
  signOut(): void;
  setUser({}: User): void;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User>();

  async function signIn(params: SignInProps): Promise<User> {
    const response = await auth.signIn(params);

    if (response.token) {
      api.defaults.headers['Authorizarion'] = `Bearer ${response.token}`;

      let {id, name, status} = {...response.fuelStation};

      await AsyncStorage.setItem('@webgaz:token', response.token);
      await AsyncStorage.setItem(
        '@webgaz:user',
        JSON.stringify({id, name, status}),
      );
      // setUser({id, name, status});

      return {id, name, status};
    }

    return null;
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  useEffect(() => {
    async function loadStorageData() {
      const dataUser = await AsyncStorage.getItem('@webgaz:user');
      const token = await AsyncStorage.getItem('@webgaz:token');

      if (dataUser && token) {
        api.defaults.headers['Authorizarion'] = `Bearer ${token}`;
        setUser(JSON.parse(dataUser));
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, loading, signOut, signIn, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
