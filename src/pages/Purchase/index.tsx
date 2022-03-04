import React, {useEffect, useState} from 'react';
import {Platform, ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {GetPurchase, Purchase as PurchaseProps} from '../../types/Purchase';
import {formatCurrency, formatDate} from '../../utils';
import {loadPurchase} from '../../service/purchase';
import {useAuth} from '../../contexts/auth';

import {Buttom, SelectPurchase} from '../../components';
import * as S from './styles';

enum FuelEnum {
  GASOLINA = 'GASOLINA',
  ETANOL = 'ETANOL',
}

enum ShippingEnum {
  RETIRADA = 'RETIRADA',
  COLACADO = 'COLACADO',
}

const PaymentTypeList = ['ANTECIPADO', 'À VISTA', '7 DIAS', '10 DIAS'];
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 1);

const Purchase: React.FC = ({navigation}: any) => {
  const {user} = useAuth();
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

  function validate() {
    return true;
  }

  async function handleNextStep() {
    if (validate()) {
      const linkTo =
        purchase.deliveryType === ShippingEnum.RETIRADA
          ? 'pedido-transportadora'
          : 'confirmar-pedido';

      navigation.navigate(linkTo, {
        purchaseOrder: purchase,
      });
    }
  }

  function updateFields(name: string, value: any) {
    setPurchase({...purchase, [name]: value, totalPrice: price});
  }

  const onChangeDatePicker = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || purchase.deliveryDate;
    setShow(Platform.OS === 'ios');
    updateFields('deliveryDate', currentDate);
  };

  async function updatePrice(params: GetPurchase) {
    const {price} = await loadPurchase(params);
    setPrice(price * purchase.qtdLiters);
  }

  useEffect(() => {
    updatePrice(purchase);
  }, [purchase]);

  return (
    <ScrollView>
      <S.Wrapper>
        <S.Card>
          <S.Text>Tipo de Combustivel</S.Text>
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
          <S.Price>R$ {formatCurrency(price)}</S.Price>
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
    </ScrollView>
  );
};

export default Purchase;
