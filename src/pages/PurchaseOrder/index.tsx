import React from 'react';
import {useAuth} from '../../contexts/auth';
import {PurchaseResponseProps} from '../../types/Purchase';
import {CardPurchase, Footer, Header} from '../../components';
import {getPurchases} from '../../service/purchase';

import * as S from './styles';

const PurchaseOrder = ({navigation}) => {
  const {user} = useAuth();
  const [purchases, setPurchases] = React.useState<PurchaseResponseProps[]>();

  React.useEffect(() => {
    async function run() {
      const result = await getPurchases(user.id);

      if (result.status === 200) {
        setPurchases(result?.data);
      }
    }
    run();
  }, []);

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Label>Pedidos</S.Label>
        <S.ScrollView>
          {purchases?.map(item => (
            <CardPurchase
              key={item.id}
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
