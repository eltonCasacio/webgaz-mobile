import {Platform, LogBox} from 'react-native';
import React, {useEffect, useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import {Header, Footer, Buttom, SelectPurchase} from '../../components';
import {Purchase as PurchaseProps} from '../../types/Purchase';
import {formatNumber, formatDate} from '../../utils';
import * as S from './styles';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

enum FuelEnum {
  GASOLINA = 'GASOLINA',
  ETANOL = 'ETANOL',
}

enum ShippingEnum {
  RETIRADA = 'RETIRADA',
  COLACADO = 'COLACADO',
}

const Purchase: React.FC = ({navigation}: any) => {
  const PaymentTypeList = ['ANTECIPADO', 'À VISTA', '7 DIAS', '10 DIAS'];

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);

  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(6);

  const [purchase, setPurchase] = useState({
    date: null,
    deliveryType: 'RETIRADA',
    fuelType: 'ETANOL',
    liters: 1,
    order: 1,
    paymentType: 'ANTECIPADO',
    totalPrice: 0,
  } as PurchaseProps);

  async function handleNextStep() {
    if (validationToNextStep()) {
      const linkTo =
        purchase.deliveryType === ShippingEnum.RETIRADA
          ? 'pedido-transportadora'
          : 'confirmar-pedido';

      navigation.navigate(linkTo, {
        data: purchase,
      });
    }
  }

  function updateFields(name: string, value: any) {
    setPurchase({...purchase, [name]: value});
  }

  const onChangeDatePicker = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || purchase.date;
    setShow(Platform.OS === 'ios');
    updateFields('date', currentDate);
  };

  function validationToNextStep() {
    return true;
  }

  useEffect(() => {
    const sum = purchase?.liters * price;
    updateFields('totalPrice', sum);
  }, [purchase.liters]);

  useEffect(() => {
    purchase.liters = 1;
    updateFields('date', currentDate);
  }, []);

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Text>Tipo de Combustivel</S.Text>
        <S.Card>
          <S.CardTitle
            onPress={() => updateFields('fuelType', FuelEnum.GASOLINA)}>
            <S.CardTitleText>Gasolina</S.CardTitleText>
            <S.RadioButton active={FuelEnum.GASOLINA === purchase.fuelType} />
          </S.CardTitle>
          <S.Divider />
          <S.CardTitle
            onPress={() => updateFields('fuelType', FuelEnum.ETANOL)}>
            <S.CardTitleText>Etanol</S.CardTitleText>

            <S.RadioButton active={FuelEnum.ETANOL === purchase.fuelType} />
          </S.CardTitle>
        </S.Card>

        <S.Text>Tipo de Entrega</S.Text>
        <S.Card>
          <S.CardTitle
            onPress={() => updateFields('deliveryType', ShippingEnum.RETIRADA)}>
            <S.CardTitleText>Retirada</S.CardTitleText>
            <S.RadioButton
              active={ShippingEnum.RETIRADA === purchase.deliveryType}
            />
          </S.CardTitle>
          <S.Divider />
          <S.CardTitle
            onPress={() => updateFields('deliveryType', ShippingEnum.COLACADO)}>
            <S.CardTitleText>Colocada</S.CardTitleText>

            <S.RadioButton
              active={ShippingEnum.COLACADO === purchase.deliveryType}
            />
          </S.CardTitle>
        </S.Card>

        <S.LitersPrice>
          <S.Liters>
            <S.LitersText>
              <S.LitersTitle>litros:</S.LitersTitle>
            </S.LitersText>
            <S.LitersInput
              keyboardType="numeric"
              onChangeText={text => updateFields('liters', text)}
              value={String(purchase?.liters)}
            />
          </S.Liters>
          <S.Price>R$ {formatNumber(purchase.totalPrice)}</S.Price>
        </S.LitersPrice>

        <S.Payment>
          <S.PaymentInputWrapper>
            <S.PaymentText>Forma de Pagamento</S.PaymentText>
            <S.PaymentSelectWrapper>
              <SelectPurchase
                options={PaymentTypeList}
                onChangeSelected={value => updateFields('paymentType', value)}
                option={purchase?.paymentType}
              />
            </S.PaymentSelectWrapper>
          </S.PaymentInputWrapper>

          <S.PaymentInputWrapper>
            <S.PaymentText>Data da Entrega</S.PaymentText>
            <S.PaymentInputDate onPress={() => setShow(true)}>
              <S.PaymentDateText>
                {formatDate(new Date(purchase.date))}
              </S.PaymentDateText>
            </S.PaymentInputDate>
            {show && (
              <DateTimePicker
                minimumDate={currentDate}
                testID="dateTimePicker"
                value={new Date(purchase.date)}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={onChangeDatePicker}
              />
            )}
          </S.PaymentInputWrapper>
        </S.Payment>

        {purchase.deliveryType === ShippingEnum.COLACADO && (
          <S.MessageFreight>
            <S.MessageFreightTitle>Atenção</S.MessageFreightTitle>
            <S.MessageFreightMsg>
              Informamos que tera um acrescimo no valor total referente ao frete
            </S.MessageFreightMsg>
          </S.MessageFreight>
        )}

        <S.Button>
          <Buttom
            color="buttonDefault"
            title="PROXIMO"
            callback={handleNextStep}
          />
        </S.Button>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default Purchase;
