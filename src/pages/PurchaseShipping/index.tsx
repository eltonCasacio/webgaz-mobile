import React from 'react';
import {Buttom} from '../../components';
import {ShippingCompany} from '../../types/ShippingCompany';

import * as S from './styles';

const PurchaseShipping: React.FC = ({route, navigation}: any) => {
  const {purchaseOrder} = route.params;
  const [shipping, setShipping] = React.useState<ShippingCompany>();
  const [fieldsErrors, setFieldsErrors] = React.useState({
    shippingDriverCnh: false,
    shippingCnpj: false,
    shippingDriverName: false,
    shippingName: false,
    shippingPlateNumber: false,
  });

  function validateFields() {
    setFieldsErrors({
      shippingDriverCnh: !shipping?.shippingDriverCnh,
      shippingCnpj: !shipping?.shippingCnpj,
      shippingDriverName: !shipping?.shippingDriverName,
      shippingName: !shipping?.shippingName,
      shippingPlateNumber: !shipping?.shippingPlateNumber,
    });

    return (
      !!shipping?.shippingDriverCnh &&
      !!shipping?.shippingCnpj &&
      !!shipping?.shippingDriverName &&
      !!shipping?.shippingName &&
      !!shipping?.shippingPlateNumber
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
            hasError={fieldsErrors?.shippingDriverName}
            onChangeText={text => handleUpdateProps('shippingDriverName', text)}
            value={shipping?.shippingDriverName}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.InputLabel>Nome da Transportadora</S.InputLabel>
          <S.Input
            hasError={fieldsErrors?.shippingName}
            onChangeText={text => handleUpdateProps('shippingName', text)}
            value={shipping?.shippingName}
          />
        </S.InputWrapper>

        <S.WrapperCnpjCnh>
          <S.InputCnpjCnh>
            <S.InputLabel>CNPJ</S.InputLabel>
            <S.Input
              hasError={fieldsErrors?.shippingCnpj}
              onChangeText={text => handleUpdateProps('shippingCnpj', text)}
              value={shipping?.shippingCnpj}
            />
          </S.InputCnpjCnh>

          <S.InputCnpjCnh>
            <S.InputLabel>CNH</S.InputLabel>
            <S.Input
              hasError={fieldsErrors?.shippingDriverCnh}
              onChangeText={text => handleUpdateProps('shippingDriverCnh', text)}
              value={shipping?.shippingDriverCnh}
            />
          </S.InputCnpjCnh>
        </S.WrapperCnpjCnh>

        <S.InputLabel>Placa</S.InputLabel>
        <S.Input
          hasError={fieldsErrors?.shippingPlateNumber}
          onChangeText={text => handleUpdateProps('shippingPlateNumber', text)}
          value={shipping?.shippingPlateNumber}
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
