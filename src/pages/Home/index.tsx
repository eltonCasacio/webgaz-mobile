import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Carousel from 'react-native-snap-carousel';
import {useLinkTo} from '@react-navigation/native';

import {ResponseProps} from '../../types/Home';
import {loadPrices} from '../../service/home';
import {useAuth} from '../../contexts/auth';
import {formatCurrency} from '../../utils/formatCurrency';
import {LinkWhatsapp} from '../../components';

import * as S from './styles';

const images = [
  {image: require('../../assets/combustivel1.jpeg')},
  {image: require('../../assets/combustivel2.jpeg')},
  {image: require('../../assets/combustivel3.jpeg')},
];

function renderItem({item}) {
  return <S.Image source={item.image} />;
}

const Home: React.FC = props => {
  const linkTo = useLinkTo();
  const {user} = useAuth();

  const [hour, setHour] = React.useState(
    `${new Date().getHours()}:${new Date().getMinutes()}`,
  );
  const [fuelStation, setFuelStation] = React.useState<ResponseProps>();
  const [messageInfo, setMessageInfo] = React.useState(
    'Cadastro Pendente de Aprovação!',
  );

  React.useEffect(() => {
    let response = null;
    let updateData = null;
    let currentDate = new Date().getMinutes();
    async function run() {
      response = await loadPrices(2);
      setFuelStation(response);

      updateData = setInterval(async () => {
        if (currentDate === new Date().getMinutes()) return;
        currentDate = new Date().getMinutes();
        setHour(`${new Date().getHours()}:${new Date().getMinutes()}`);
      }, 5000);
    }
    run();

    return () => {
      setFuelStation(null);
      clearInterval(updateData);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.WrapperCarousel>
        <Carousel
          data={images}
          sliderWidth={400}
          itemWidth={240}
          renderItem={renderItem}
          autoplay={true}
          enableMomentum={false}
          lockScrollWhileSnapping={true}
          autoplayDelay={100}
          autoplayInterval={10000}
          loop
          inactiveSlideScale={0.7}
        />
      </S.WrapperCarousel>

      {user.status === 'ACTIVE' ? (
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
          <Entypo name="price-tag" color={'#fcfcfc'} size={16} />
          <S.CardPriceTitleText>Preços do dia</S.CardPriceTitleText>
        </S.CardPriceTitle>

        <S.CardPriceDate>
          <S.CardPriceDateItem>
            <S.CardPriceDateHourLabel>hora</S.CardPriceDateHourLabel>
            <S.CardPriceDateHour>{hour}</S.CardPriceDateHour>
          </S.CardPriceDateItem>

          <S.CardPriceDateItem>
            <S.CardPriceDateHourLabel>dia/mes</S.CardPriceDateHourLabel>
            <S.CardPriceDateHour>
              {new Date().toDateString().slice(3, -4)}
            </S.CardPriceDateHour>
          </S.CardPriceDateItem>
        </S.CardPriceDate>

        <S.CardPriceFuel>
          <S.CardPriceFuelLabel>{fuelStation?.fuelType}</S.CardPriceFuelLabel>
          <S.CardPriceFuelPrice>
            R$ {formatCurrency(fuelStation?.price)}
          </S.CardPriceFuelPrice>
        </S.CardPriceFuel>

        <S.CardPriceFuel>
          <S.CardPriceFuelLabel>{fuelStation?.fuelType}</S.CardPriceFuelLabel>
          <S.CardPriceFuelPrice>
            R$ {formatCurrency(fuelStation?.price)}
          </S.CardPriceFuelPrice>
        </S.CardPriceFuel>

        <S.PurchaseButton
          disabled={user.status !== 'ACTIVE'}
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
