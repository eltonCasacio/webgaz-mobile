import React from 'react';
import {StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import * as S from './styles';
import Base from '../../components/Base';

const images = [
  {image: require('../../assets/combustivel1.jpeg')},
  {image: require('../../assets/combustivel2.jpeg')},
  {image: require('../../assets/combustivel3.jpeg')},
];

function renderItem({item}) {
  return <S.Image source={item.image} />;
}

const Home: React.FC = () => {
  return (
    <Base name="Home">
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
          <S.GasText>Gasolina R$12,00</S.GasText>
          <S.EtanolText>Etanol R$12,00</S.EtanolText>
        </S.CardPrice>
      </S.Wrapper>
    </Base>
  );
};


export default Home;
