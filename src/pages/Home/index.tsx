import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useLinkTo} from '@react-navigation/native';

import {formatCurrency, getHour} from '../../utils';
import {ResponseProps} from '../../types/Home';
import {loadPrices} from '../../service/home';
import {useAuth} from '../../contexts/auth';

import {LinkWhatsapp, Carousel} from '../../components';

import * as S from './styles';

const Home: React.FC = ({navigation}: any) => {
  const linkTo = useLinkTo();
  const {user} = useAuth();

  const [hour, setHour] = React.useState<string>(getHour());
  const [fuelStation, setFuelStation] = React.useState<ResponseProps>();
  const [messageInfo, setMessageInfo] = React.useState(
    'Cadastro Pendente de Aprovação!',
  );

  function startTimer() {
    return setInterval(async () => {
      setHour(getHour());
    }, 1000);
  }

  React.useEffect(() => {
    let intervalStartTimer = null;
    intervalStartTimer = startTimer();
    return () => {
      clearInterval(intervalStartTimer);
    };
  }, []);

  React.useEffect(() => {
    let response = null;
    const unsubscribe = navigation.addListener('focus', () => {
      async function run() {
        response = await loadPrices(2);
        setFuelStation(response);
      }
      run();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <S.Wrapper>
      <S.WrapperCarousel>
        <Carousel />
      </S.WrapperCarousel>

      {user?.status === 'ACTIVE' ? (
        <S.WhatsApp>
          <LinkWhatsapp
            text="enviar comprovante de pagamento"
            phone="+5519971196825"
          />
        </S.WhatsApp>
      ) : (
        <S.MessageError>{messageInfo}</S.MessageError>
      )}

      <S.CardPrice>
        <S.CardPriceTitle>
          <Entypo name="price-tag" color={'#fcfcfc'} size={12} />
          <S.CardPriceTitleText>Preços do dia</S.CardPriceTitleText>
        </S.CardPriceTitle>

        <S.CardPriceDate>
          <S.CardPriceDateItem>
            <S.CardPriceDateHourLabel>hora</S.CardPriceDateHourLabel>
            <S.CardPriceDateHour>{hour}</S.CardPriceDateHour>
          </S.CardPriceDateItem>

          <S.CardPriceDateItem>
            <S.CardPriceDateHourLabel>dia</S.CardPriceDateHourLabel>
            <S.CardPriceDateHour>
              {new Date().toDateString().slice(3, -4).substring(4)}
            </S.CardPriceDateHour>
          </S.CardPriceDateItem>
        </S.CardPriceDate>

        <S.CardPriceFuel>
          <S.CardPriceFuelLabel>
            {fuelStation && fuelStation[0]?.fuelType}
          </S.CardPriceFuelLabel>
          <S.CardPriceFuelPrice>
            R$ {formatCurrency(fuelStation && fuelStation[0]?.price)}
          </S.CardPriceFuelPrice>
        </S.CardPriceFuel>

        <S.CardPriceFuel>
          <S.CardPriceFuelLabel>
            {fuelStation && fuelStation[1]?.fuelType}
          </S.CardPriceFuelLabel>
          <S.CardPriceFuelPrice>
            R$ {formatCurrency(fuelStation && fuelStation[1]?.price)}
          </S.CardPriceFuelPrice>
        </S.CardPriceFuel>

        <S.PurchaseButton
          disabled={user?.status !== 'ACTIVE'}
          onPress={() => linkTo('/pedido')}>
          <S.PurchaseButtonText>FAZER PEDIDO</S.PurchaseButtonText>
        </S.PurchaseButton>
      </S.CardPrice>

      <S.Operation>
        <S.OperationTitleText>Horário para Pedidos</S.OperationTitleText>

        <S.OperationDate>
          <S.OperationDateItem>
            <S.OperationHourLabel>08:00 as 16:00</S.OperationHourLabel>
          </S.OperationDateItem>
        </S.OperationDate>
      </S.Operation>
    </S.Wrapper>
  );
};

export default Home;
