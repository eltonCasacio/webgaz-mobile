import React, {useState} from 'react';
import * as S from './styles';
import {Header, Footer, Buttom} from '../../components';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Platform} from 'react-native';

enum FuelType {
  'Gasolina' = 'Gasolina',
  'Etanol' = 'Etanol',
}

enum Shipping {
  'Retirada' = 'Retirada',
  'Colocada' = 'Colocada',
}

const Purchase: React.FC = () => {
  const [fuelSelected, setFuelSelected] = useState(FuelType.Etanol);
  const [shippingSelected, setShippingSelected] = useState(Shipping.Retirada);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  function formatDate() {
    const dateFormated = new Date(date);
    const day = dateFormated.getDate();
    const month = dateFormated.getMonth();
    const year = dateFormated.getFullYear();

    return `${day}/${month + 1}/${year}`;
  }

  function handleNextStep() {}

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Text>Tipo de Combustivel</S.Text>
        <S.Card>
          <S.CardTitle onPress={() => setFuelSelected(FuelType.Gasolina)}>
            <S.CardTitleText>Gasolina</S.CardTitleText>
            <S.RadioButton active={FuelType.Gasolina === fuelSelected} />
          </S.CardTitle>
          <S.Divider />
          <S.CardTitle onPress={() => setFuelSelected(FuelType.Etanol)}>
            <S.CardTitleText>Etanol</S.CardTitleText>

            <S.RadioButton active={FuelType.Etanol === fuelSelected} />
          </S.CardTitle>
        </S.Card>

        <S.Text>Tipo de Entrega</S.Text>
        <S.Card>
          <S.CardTitle onPress={() => setShippingSelected(Shipping.Retirada)}>
            <S.CardTitleText>Retirada</S.CardTitleText>
            <S.RadioButton active={Shipping.Retirada === shippingSelected} />
          </S.CardTitle>
          <S.Divider />
          <S.CardTitle onPress={() => setShippingSelected(Shipping.Colocada)}>
            <S.CardTitleText>Colocada</S.CardTitleText>

            <S.RadioButton active={Shipping.Colocada === shippingSelected} />
          </S.CardTitle>
        </S.Card>

        <S.LitersPrice>
          <S.Liters>
            <S.LitersText>
              <S.Text>litros:</S.Text>
            </S.LitersText>
            <S.LitersInput keyboardType="numeric" />
          </S.Liters>
          <S.Price>R$5,00</S.Price>
        </S.LitersPrice>

        <S.Payment>
          <S.PaymentInputWrapper>
            <S.PaymentText>Forma de Pagamento</S.PaymentText>
            <S.PaymentInput />
          </S.PaymentInputWrapper>

          <S.PaymentInputWrapper>
            <S.PaymentText>Data de entrega</S.PaymentText>
            <S.PaymentInputDate onPress={() => setShow(true)}>
              <S.PaymentDateText>{formatDate()}</S.PaymentDateText>
            </S.PaymentInputDate>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </S.PaymentInputWrapper>
        </S.Payment>

        <S.MessageFreight>
          <S.MessageFreightTitle>Atenção</S.MessageFreightTitle>
          <S.MessageFreightMsg>
            Informamos que tera um acrescimo no valor total referente ao frete
          </S.MessageFreightMsg>
        </S.MessageFreight>

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
