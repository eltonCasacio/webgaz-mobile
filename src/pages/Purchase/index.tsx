import {Platform, LogBox} from 'react-native';
import React, {useEffect, useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import {Purchase as PurchaseProps} from '../../types/Purchase';
import {User} from '../../types/Auth';
import {formatCurrency, formatDate} from '../../utils';

import {Header, Footer, Buttom, SelectPurchase} from '../../components';
import {loadPurchase} from '../../service/purchase';
import * as S from './styles';

import {useAuth} from '../../contexts/auth';

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

const PaymentTypeList = ['ANTECIPADO', 'À VISTA', '7 DIAS', '10 DIAS'];

const Purchase: React.FC = ({navigation}: any) => {
  const {user} = useAuth();
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);

  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(0);
  const [purchase, setPurchase] = useState({
    qtdLiters: 1,
    fuelType: 'ETANOL',
    deliveryType: 'RETIRADA',
    paymentType: 'ANTECIPADO',
    deliveryDate: String(currentDate),
    totalPrice: price,
    fuelStationId: user.id,
  } as PurchaseProps);

  function validationToNextStep() {
    return true;
  }

  function updateFields(name: string, value: any) {
    setPurchase({...purchase, [name]: value});
  }

  const onChangeDatePicker = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || purchase.deliveryDate;
    setShow(Platform.OS === 'ios');
    updateFields('date', currentDate);
  };

  async function handleNextStep() {
    if (validationToNextStep()) {
      const linkTo =
        purchase.deliveryType === ShippingEnum.RETIRADA
          ? 'pedido-transportadora'
          : 'confirmar-pedido';

      console.log('PURCHASE:::', purchase);
      navigation.navigate(linkTo, {
        purchaseOrder: purchase,
      });
    }
  }

  useEffect(() => {
    const sum = purchase?.qtdLiters * price;
    updateFields('totalPrice', sum);
  }, [purchase.qtdLiters]);

  useEffect(() => {
    async function run() {
      const {price} = await loadPurchase({
        deliveryType: 'RETIRADA',
        fuelType: 'ETANOL',
        paymentType: 'ANTECIPADO',
        fuelStationId: Number(user.id),
      });

      setPrice(price);
      updateFields('totalPrice', price);
    }
    run();
  }, []);

  return (
    <S.Wrapper>
      <Header />

      <S.Card>
        <S.Text>Tipo de Combustivel</S.Text>
        <S.CardTitle
          onPress={() => updateFields('fuelType', FuelEnum.GASOLINA)}>
          <S.CardTitleText>Gasolina</S.CardTitleText>
          <S.RadioButton active={FuelEnum.GASOLINA === purchase.fuelType} />
        </S.CardTitle>
        <S.Divider />
        <S.CardTitle onPress={() => updateFields('fuelType', FuelEnum.ETANOL)}>
          <S.CardTitleText>Etanol</S.CardTitleText>

          <S.RadioButton active={FuelEnum.ETANOL === purchase.fuelType} />
        </S.CardTitle>
      </S.Card>

      <S.Card>
        <S.Text>Tipo de Entrega</S.Text>
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
            onChangeText={text => updateFields('qtdLiters', text)}
            value={String(purchase?.qtdLiters)}
          />
        </S.Liters>
        <S.Price>R$ {formatCurrency(purchase.totalPrice)}</S.Price>
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
              {formatDate(new Date(purchase.deliveryDate))}
            </S.PaymentDateText>
          </S.PaymentInputDate>
          {show && (
            <DateTimePicker
              minimumDate={currentDate}
              testID="dateTimePicker"
              value={new Date(purchase.deliveryDate)}
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
  );
};

export default Purchase;
