import React from 'react';
import {CardPurchase, Footer, Header} from '../../components';
import * as S from './styles';

import {purchaseCardDatail} from '../../mocks/Purchases';

export type PurchaseOrderProps = {
  order: number
  date: Date
  status: string
  totalPrice:number
  fuelType:string
}

const PurchaseOrder = ({navigation}) => {
  const [purchases, setPurchases] = React.useState<PurchaseOrderProps[]>(purchaseCardDatail);

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Label>Pedidos</S.Label>
        <S.ScrollView>
          {purchases.map(item => (
            <CardPurchase
              key={item.order}
              data={item}
              navigation={navigation}
            />
          ))}
        </S.ScrollView>
        <S.Goback onPress={() => navigation.goBack()}>
            <S.GobackText>VOLTAR</S.GobackText>
          </S.Goback>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default PurchaseOrder;
