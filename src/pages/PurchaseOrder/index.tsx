import React from 'react';
import {CardPurchase, Footer, Header} from '../../components';
import * as S from './styles';

import {purchases as purchasesMock} from '../../mocks/Purchases';
import {purchasesType} from '../../types/Purchase';

const PurchaseOrder = ({navigation}) => {
  const [purchases, setPurchases] =
    React.useState<purchasesType[]>(purchasesMock);

  function handleSearch(text: string) {}

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Label>Pedidos</S.Label>

        <S.SearchWrapper>
          <S.SearchIcon source={require('../../assets/search.png')}/>
          <S.SearchInput onChangeText={text => handleSearch(text)} />
        </S.SearchWrapper>

        <S.ScrollView>
          {purchases.map(item => (
            <CardPurchase
              key={item.order}
              data={item}
              navigation={navigation}
            />
          ))}
        </S.ScrollView>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default PurchaseOrder;
