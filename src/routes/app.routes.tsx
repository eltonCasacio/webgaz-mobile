import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import ProfileUser from '../pages/ProfileUser';
import PurchaseOrder from '../pages/PurchaseOrder';
import PurchaseOrderDetails from '../pages/PurchaseOrderDetails';
import Purchase from '../pages/Purchase';
import PurchaseShipping from '../pages/PurchaseShipping';
import PurchaseConfirmation from '../pages/PurchaseConfirmation';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'transparent'},
        animation: 'none',
      }}>
      <AppStack.Screen
        name="inicio"
        component={Home}
        options={{title: 'Tabela de Preços'}}
      />
      <AppStack.Screen
        name="perfil"
        component={ProfileUser}
        options={{title: 'Perfil'}}
      />

      <AppStack.Screen
        name="pedido"
        component={Purchase}
        options={{title: 'Pedir'}}
      />

      <AppStack.Screen
        name="pedido-transportadora"
        component={PurchaseShipping}
        options={{title: 'Informações da Transportadora'}}
      />

      <AppStack.Screen
        name="confirmar-pedido"
        component={PurchaseConfirmation}
        options={{title: 'Confirmar Pedido'}}
      />

      <AppStack.Screen
        name="pedidos"
        component={PurchaseOrder}
        options={{title: 'Pedidos'}}
      />

      <AppStack.Screen
        name="detalhes"
        component={PurchaseOrderDetails}
        options={{title: 'Detalhes do Pedido'}}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
