import React from 'react';
import {Header, Footer, Buttom} from '../../components';
import {ShippingCompany} from '../../types/ShippingCompany';

import * as S from './styles';

const PurchaseShipping: React.FC = ({route, navigation}: any) => {
  const {purchaseOrder} = route.params;
  const [shipping, setShipping] = React.useState<ShippingCompany>();

  function handleNextStep() {
    if (validationToNextStep()) {
      navigation.navigate('confirmar-pedido', {
        purchaseOrder: purchaseOrder,
        shippingCompany: shipping,
      });
    }
  }

  function validationToNextStep() {
    return true;
  }

  function handleUpdateProps(name: string, value: string) {
    setShipping({...shipping, [name]: value});
  }

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Label>Transportadora</S.Label>

        <S.ShippingInfo>
          <S.InputWrapper>
            <S.InputLabel>Nome do Motorista</S.InputLabel>
            <S.Input
              hasError={false}
              onChangeText={text => handleUpdateProps('driverName', text)}
              value={shipping?.driverName}
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.InputLabel>Nome da Transportadora</S.InputLabel>
            <S.Input
              hasError={false}
              onChangeText={text => handleUpdateProps('name', text)}
              value={shipping?.name}
            />
          </S.InputWrapper>

          <S.WrapperCnpjCnh>
            <S.InputCnpjCnh>
              <S.InputLabel>CNPJ</S.InputLabel>
              <S.Input
                hasError={false}
                onChangeText={text => handleUpdateProps('cnpj', text)}
                value={shipping?.cnpj}
              />
            </S.InputCnpjCnh>

            <S.InputCnpjCnh>
              <S.InputLabel>CNH</S.InputLabel>
              <S.Input
                hasError={false}
                secureTextEntry
                onChangeText={text => handleUpdateProps('cnh', text)}
                value={shipping?.cnh}
              />
            </S.InputCnpjCnh>
          </S.WrapperCnpjCnh>

          <S.InputLabel>Placa</S.InputLabel>
          <S.Input
            hasError={false}
            onChangeText={text => handleUpdateProps('plateNumber', text)}
            value={shipping?.plateNumber}
          />

          <S.Button>
            <Buttom
              color="buttonDefault"
              title="PROXIMO"
              callback={handleNextStep}
            />

            <S.Goback onPress={() => navigation.goBack()}>
              <S.GobackText>VOLTAR</S.GobackText>
            </S.Goback>
          </S.Button>
        </S.ShippingInfo>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default PurchaseShipping;
