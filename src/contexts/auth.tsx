import React, {createContext, useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../service/auth';
import api from '../service/api';
import {responseMessage, ResponseProps} from '../utils';

import {UserProps, SignInProps as SignInProps} from '../types/Auth';

interface AuthContextData {
  signed: boolean;
  user: UserProps | null;
  loading: boolean;
  signIn({}: SignInProps): Promise<ResponseProps>;
  signOut(): void;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserProps | null>(null);

  async function signIn({
    email,
    password,
  }: SignInProps): Promise<ResponseProps> {
    const response = await auth.signIn({email, password});
    if (response) {
      setUser(response.user);
      api.defaults.headers['Authorizarion'] = `Bearer ${response.token}`;

      await AsyncStorage.setItem('@webgaz:user', JSON.stringify(response.user));
      await AsyncStorage.setItem('@webgaz:token', response.token);
      return responseMessage({
        msg: 'Usuário Logado',
        severity: 'success',
      });
    } else {
      return responseMessage({
        msg: 'Usuário ou Senha Inválido',
        severity: 'error',
      });
    }
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
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
      value={{signed: !!user, user, loading, signOut, signIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
