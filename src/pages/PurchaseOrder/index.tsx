import React from 'react';
import {CardPurchase, Footer, Header} from '../../components';
import {getPurchases} from '../../service/purchase';
import * as S from './styles';

import {purchaseCardDatail} from '../../mocks/Purchases';
import {useAuth} from '../../contexts/auth';

export type PurchaseOrderProps = {
  order: number;
  date: Date;
  status: string;
  totalPrice: number;
  fuelType: string;
};

const PurchaseOrder = ({navigation}) => {
  const {user} = useAuth();
  const [purchases, setPurchases] =
    React.useState<PurchaseOrderProps[]>(purchaseCardDatail);

  // React.useEffect(() => {
  //   const result = async function run() {
  //     getPurchases(user.id);
  //   }
  // setPurchases(result)
  //   run();
  // }, []);

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
