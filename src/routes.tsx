import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './pages/Main';
import SingIn from './pages/SingIn';
import SignUp from './pages/SignUp';
import ProfileUser from './pages/ProfileUser';
import PurchaseOrder from './pages/PurchaseOrder';
import RecoveryPassword from './pages/RecoveryPassword';
import RecoveryPasswordDetails from './pages/RecoveryPasswordDetails';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SingIn">
        <Stack.Screen
          name="SingIn"
          component={SingIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="ProfileUser" component={ProfileUser} />
        <Stack.Screen name="PurchaseOrder" component={PurchaseOrder} />
        <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
        <Stack.Screen
          name="RecoveryPasswordDetails"
          component={RecoveryPasswordDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
