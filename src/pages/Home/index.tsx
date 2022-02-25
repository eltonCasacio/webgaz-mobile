import React from 'react';
import {TouchableOpacity, Linking} from 'react-native';
import {useLinkTo} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import Entypo from 'react-native-vector-icons/Entypo';

import {Header, Footer, LinkWhatsapp} from '../../components';
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

  const handleWhatsApp = () => {
    Linking.openURL(
      `whatsapp://send?text=${'Teste webgaz'}&phone=${'+5519971196825'}`,
    );
  };

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
            <S.CardPriceFuelLabel>Etanol</S.CardPriceFuelLabel>
            <S.CardPriceFuelPrice>R$5,63</S.CardPriceFuelPrice>
          </S.CardPriceFuel>

          <S.CardPriceFuel>
            <S.CardPriceFuelLabel>Gasolina</S.CardPriceFuelLabel>
            <S.CardPriceFuelPrice>R$6,34</S.CardPriceFuelPrice>
          </S.CardPriceFuel>

          <S.PurchaseButton onPress={() => linkTo('/pedido')}>
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
      <Footer />
    </>
  );
};

export default Home;
