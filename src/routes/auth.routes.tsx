import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RecoveryPassword from '../pages/RecoveryPassword';

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{title: 'Loging'}}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{title: 'Criar Conta'}}
    />
    <AuthStack.Screen
      name="RecoveryPassword"
      component={RecoveryPassword}
      options={{title: 'Nova Senha'}}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
