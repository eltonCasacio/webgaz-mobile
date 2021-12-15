import React from 'react';
import Button from '../../components/Buttom';
import * as S from './styles';
import {useAuth} from '../../contexts/auth';

import Card from '../../components/Card';
import Footer from '../../components/Footer';

const Main = ({navigation}) => {
  const {signOut, user} = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  const handlePurchaseOrder = () => {
    signOut();
  };

  return (
    <S.Wrapper>
      <S.Cards>
        <Card type="Etanol" priceRemoval={3.87} priceColocada={4} />
        <Card type="Gasolina Comum" priceRemoval={4.87} priceColocada={4} />
      </S.Cards>
      <Button title="Realizar Pedido" callback={handlePurchaseOrder} />
      <Footer navigation={navigation} />
    </S.Wrapper>
  );
};

export default Main;
