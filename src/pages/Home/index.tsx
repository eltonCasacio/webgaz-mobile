import React from 'react';
import {TouchableOpacity, Linking} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useLinkTo} from '@react-navigation/native';

import {ResponseProps} from '../../types/Home';
import {User} from '../../types/Auth';
import {Header, LinkWhatsapp} from '../../components';
import {loadPrices} from '../../service/home';

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
  const [homePrice, setHomePrice] = React.useState<ResponseProps>();
  const [isActive, setIsActive] = React.useState(Boolean);
  const [messageInfo, setMessageInfo] = React.useState('');

  const handleWhatsApp = () => {
    Linking.openURL(
      `whatsapp://send?text=${'Teste webgaz'}&phone=${'+5519971196825'}`,
    );
  };

  React.useEffect(() => {
    async function run() {
      const data = await loadPrices(2);
      setHomePrice(data);
      const userJson = await AsyncStorage.getItem('@webgaz:user');
      const user: User = JSON.parse(userJson);
      setIsActive(user.status === 'PENDING');
    }
    run();
  }, [props]);

  React.useEffect(() => {
    async function run() {
      setMessageInfo(isActive ? '' : 'Cadastro Pendente de Aprovação!');
    }
    run();
  }, [isActive]);

  return (
    <S.Wrapper>
      <Header />
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

      <TouchableOpacity onPress={handleWhatsApp}>
        <LinkWhatsapp
          text="enviar comprovante de pagamento"
          phone="+5519971196825"
        />
      </TouchableOpacity>

      <S.CardPrice>
        <S.CardPriceTitle>
          <Entypo name="price-tag" color={'#fcfcfc'} size={16} />
          <S.CardPriceTitleText>Preços do dia</S.CardPriceTitleText>
        </S.CardPriceTitle>

        <S.CardPriceDate>
          <S.CardPriceDateItem>
            <S.CardPriceDateHourLabel>hora</S.CardPriceDateHourLabel>
            <S.CardPriceDateHour>16:00</S.CardPriceDateHour>
          </S.CardPriceDateItem>

          <S.CardPriceDateItem>
            <S.CardPriceDateHourLabel>dia/mes</S.CardPriceDateHourLabel>
            <S.CardPriceDateHour>21/02</S.CardPriceDateHour>
          </S.CardPriceDateItem>
        </S.CardPriceDate>

        <S.CardPriceFuel>
          <S.CardPriceFuelLabel>{homePrice?.fuelType}</S.CardPriceFuelLabel>
          <S.CardPriceFuelPrice>R$ {homePrice?.price}</S.CardPriceFuelPrice>
        </S.CardPriceFuel>

        <S.CardPriceFuel>
          <S.CardPriceFuelLabel>{homePrice?.fuelType}</S.CardPriceFuelLabel>
          <S.CardPriceFuelPrice>R$ {homePrice?.price}</S.CardPriceFuelPrice>
        </S.CardPriceFuel>

        <S.PurchaseButton
          disabled={!isActive}
          onPress={() => linkTo('/pedido')}>
          <S.PurchaseButtonText>FAZER PEDIDO</S.PurchaseButtonText>
        </S.PurchaseButton>
      </S.CardPrice>

      <S.MessageError>{messageInfo ? messageInfo : ''}</S.MessageError>

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
