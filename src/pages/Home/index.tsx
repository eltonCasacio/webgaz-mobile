import React from 'react';
import {useLinkTo} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import Buttom from '../../components/Buttom';
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
  const linkTo = useLinkTo()

  return (
    <S.Wrapper>
      <S.WrapperCarousel>
        <Carousel
          data={images}
          sliderWidth={650}
          itemWidth={300}
          renderItem={renderItem}
          autoplay={true}
          enableMomentum={false}
          lockScrollWhileSnapping={true}
          autoplayDelay={100}
          autoplayInterval={10000}
          loop
        />
      </S.WrapperCarousel>
      <S.CardPrice>
        <S.WrapperFuelText>
          <S.FuelText>Gasolina </S.FuelText>
          <S.FuelPrice>R$12,00</S.FuelPrice>
        </S.WrapperFuelText>

        <S.WrapperFuelText>
          <S.FuelText>Etanol </S.FuelText>
          <S.FuelPrice>R$12,00</S.FuelPrice>
        </S.WrapperFuelText>
      <Buttom callback={() => linkTo('/Home')} title="Fazer Pedido" />
      </S.CardPrice>
    </S.Wrapper>
  );
};

export default Home;
