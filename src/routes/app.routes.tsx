import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import ProfileUser from '../pages/ProfileUser';
import PurchaseOrder from '../pages/PurchaseOrder';
import PurchaseOrderDetails from '../pages/PurchaseOrderDetails';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{title: 'Tabela de Preços', animation: 'none'}}
      />
      <AppStack.Screen
        name="ProfileUser"
        component={ProfileUser}
        options={{title: 'Perfil', animation: 'none'}}
      />
      <AppStack.Screen
        name="PurchaseOrder"
        component={PurchaseOrder}
        options={{title: 'Pedidos', animation: 'none'}}
      />

      <AppStack.Screen
        name="PurchaseOrderDetails"
        component={PurchaseOrderDetails}
        options={{title: 'Detalhes do Pedido', animation: 'none'}}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
