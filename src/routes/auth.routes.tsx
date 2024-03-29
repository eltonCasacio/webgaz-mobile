import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: {backgroundColor: '#1C1A29'},
      animation: 'none',
    }}>
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
      name="ResetPassword"
      component={ResetPassword}
      options={{title: 'Nova Senha'}}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
