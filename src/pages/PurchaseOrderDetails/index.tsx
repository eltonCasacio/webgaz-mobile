import React from 'react';
import {Buttom, Header, Footer, CardPurchaseDetails} from '../../components';
import * as S from './styles';

const PurchaseOrderDetails = ({route, navigation}) => {
  const {data} = route.params;

  function cancel() {}

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Label>Login</S.Label>

        <CardPurchaseDetails data={data} navigation={navigation} />
        
        <S.Button>
          <Buttom
            color="buttonDanger"
            title="CANCELAR PEDIDO"
            callback={cancel}
          />

          <S.Goback onPress={() => navigation.goBack()}>
            <S.GobackText>VOLTAR</S.GobackText>
          </S.Goback>
        </S.Button>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default PurchaseOrderDetails;
