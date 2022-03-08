import React from 'react';
import {Buttom} from '../../components';
import {ShippingCompany} from '../../types/ShippingCompany';

import * as S from './styles';

const PurchaseShipping: React.FC = ({route, navigation}: any) => {
  const {purchaseOrder} = route.params;
  const [shipping, setShipping] = React.useState<ShippingCompany>();
  const [fieldsErrors, setFieldsErrors] = React.useState({
    cnh: false,
    cnpj: false,
    driverName: false,
    name: false,
    plateNumber: false,
  });

  function validateFields() {
    setFieldsErrors({
      cnh: !shipping?.cnh,
      cnpj: !shipping?.cnpj,
      driverName: !shipping?.driverName,
      name: !shipping?.name,
      plateNumber: !shipping?.plateNumber,
    });

    return (
      !!shipping?.cnh &&
      !!shipping?.cnpj &&
      !!shipping?.driverName &&
      !!shipping?.name &&
      !!shipping?.plateNumber
    );
  }

  function handleUpdateProps(name: string, value: string) {
    setShipping({...shipping, [name]: value});
  }

  function handleNextStep() {
    if (validateFields()) {
      navigation.navigate('confirmar-pedido', {
        purchaseOrder: purchaseOrder,
        shippingCompany: shipping,
      });
    }
  }

  return (
    <S.Wrapper>
      <S.Label>Transportadora</S.Label>

      <S.Form>
        <S.InputWrapper>
          <S.InputLabel>Nome do Motorista</S.InputLabel>
          <S.Input
            hasError={fieldsErrors?.driverName}
            onChangeText={text => handleUpdateProps('driverName', text)}
            value={shipping?.driverName}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.InputLabel>Nome da Transportadora</S.InputLabel>
          <S.Input
            hasError={fieldsErrors?.name}
            onChangeText={text => handleUpdateProps('name', text)}
            value={shipping?.name}
          />
        </S.InputWrapper>

        <S.WrapperCnpjCnh>
          <S.InputCnpjCnh>
            <S.InputLabel>CNPJ</S.InputLabel>
            <S.Input
              hasError={fieldsErrors?.cnpj}
              onChangeText={text => handleUpdateProps('cnpj', text)}
              value={shipping?.cnpj}
            />
          </S.InputCnpjCnh>

          <S.InputCnpjCnh>
            <S.InputLabel>CNH</S.InputLabel>
            <S.Input
              hasError={fieldsErrors?.cnh}
              onChangeText={text => handleUpdateProps('cnh', text)}
              value={shipping?.cnh}
            />
          </S.InputCnpjCnh>
        </S.WrapperCnpjCnh>

        <S.InputLabel>Placa</S.InputLabel>
        <S.Input
          hasError={fieldsErrors?.plateNumber}
          onChangeText={text => handleUpdateProps('plateNumber', text)}
          value={shipping?.plateNumber}
        />
      </S.Form>

      <Buttom color="buttonDefault" title="PROXIMO" callback={handleNextStep} />

      <S.Goback onPress={() => navigation.goBack()}>
        <S.GobackText>VOLTAR</S.GobackText>
      </S.Goback>
    </S.Wrapper>
  );
};

export default PurchaseShipping;
