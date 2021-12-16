import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from '../pages/Main';
import ProfileUser from '../pages/ProfileUser';
import PurchaseOrder from '../pages/PurchaseOrder';
import PurchaseOrderDetails from '../pages/PurchaseOrderDetails';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen
        name="Main"
        component={Main}
        options={{title: 'Tabela de Preços', animation: 'none'}}
      />
      <AppStack.Screen
        name="ProfileUser"
        component={ProfileUser}
        options={{title: 'Perfil', animation: 'none'}}
      />
      <AppStack.Screen name="PurchaseOrder" component={PurchaseOrder} />
      <AppStack.Screen
        name="PurchaseOrderDetails"
        component={PurchaseOrderDetails}
        options={{title: 'Pedidos', animation: 'none'}}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
