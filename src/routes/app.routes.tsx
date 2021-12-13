import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from '../pages/Main';
import ProfileUser from '../pages/ProfileUser';
import PurchaseOrder from '../pages/PurchaseOrder';
import PurchaseOrderDetails from '../pages/PurchaseOrderDetails';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#ff0'},
      headerTintColor: '#f00',
      headerTitleStyle: {fontWeight: 'bold'},
      headerTitleAlign: 'center',
    }}>
    <AppStack.Screen name="Main" component={Main} />
    <AppStack.Screen name="ProfileUser" component={ProfileUser} />
    <AppStack.Screen name="PurchaseOrder" component={PurchaseOrder} />
    <AppStack.Screen
      name="PurchaseOrderDetails"
      component={PurchaseOrderDetails}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
