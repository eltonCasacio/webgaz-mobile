import React from 'react';
import {useLinkTo} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Header, Footer} from '../../components';
import * as S from './styles';

const images = [
  {image: require('../../assets/combustivel1.jpeg')},
  {image: require('../../assets/combustivel2.jpeg')},
  {image: require('../../assets/combustivel3.jpeg')},
];

function renderItem({item}) {
  return <S.Image source={item.image} />;
}

const Home: React.FC = () => {
  const linkTo = useLinkTo();

  return (
    <>
      <Header />
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

        <S.Order onPress={() => linkTo('/Inicio')}>
          <S.OrderText>Fazer Pedido</S.OrderText>
          <S.OrderIcon>
            <AntDesign name="right" color={'#8f8f8f'} size={18} />
          </S.OrderIcon>
        </S.Order>

        <S.CardPrice>
          <S.CardPriceTitle>
            <S.CardPriceIcon>
              <Entypo name="price-tag" color={'#fcfcfc'} size={22} />
            </S.CardPriceIcon>
            <S.CardPriceTitleText>Preços Diários</S.CardPriceTitleText>
          </S.CardPriceTitle>

          <S.CardPriceDate>
            <S.CardPriceDateItem>
              <S.CardPriceDateHourLabel>hora</S.CardPriceDateHourLabel>
              <S.CardPriceDateHour>16:00</S.CardPriceDateHour>
            </S.CardPriceDateItem>

            <S.CardPriceDateItem>
              <S.CardPriceDateHourLabel>dia/mes</S.CardPriceDateHourLabel>
              <S.CardPriceDateHour>16:00</S.CardPriceDateHour>
            </S.CardPriceDateItem>

            <S.CardPriceDateItem>
              <S.CardPriceDateHourLabel>--</S.CardPriceDateHourLabel>
              <S.CardPriceDateHour>--</S.CardPriceDateHour>
            </S.CardPriceDateItem>
          </S.CardPriceDate>

          <S.CardPriceFuel>
            <S.CardPriceFuelLabel>Etanol</S.CardPriceFuelLabel>
            <S.CardPriceFuelPrice>R$5,63</S.CardPriceFuelPrice>
          </S.CardPriceFuel>

          <S.CardPriceFuel>
            <S.CardPriceFuelLabel>Gasolina</S.CardPriceFuelLabel>
            <S.CardPriceFuelPrice>R$6,34</S.CardPriceFuelPrice>
          </S.CardPriceFuel>
        </S.CardPrice>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default Home;
