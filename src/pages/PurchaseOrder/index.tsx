import React from 'react';
import Title from '../../components/Title';
import CardPurchase from '../../components/CardPurchase';
import * as S from './styles'

import {purchases} from '../../mocks/Purchases'

const PurchaseOrder = ({navigation}) => {
  return (
    <S.Wrapper>
      <Title>PEDIDOS</Title>
      <S.ScrollView>
        {purchases.map(item => (
          <CardPurchase key={item.order} data={item} navigation={navigation}/>
        ))}
      </S.ScrollView>
    </S.Wrapper>
  );
};

export default PurchaseOrder;
