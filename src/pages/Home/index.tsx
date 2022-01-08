import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import * as S from './styles';
import Footer from '../../components/Footer';

const data = [
  {image: require('../../assets/combustivel1.jpeg')},
  {image: require('../../assets/combustivel2.jpeg')},
  {image: require('../../assets/combustivel3.jpeg')},
];

const Home = ({navigation}) => {
  function renderItem({item}) {
    return (
      <S.View>
        <S.Image source={item.image} />
      </S.View>
    );
  }

  useEffect(() => {}, []);
  return (
    <S.Wrapper>
      <S.WrapperCarousel>
        <Carousel
          data={data}
          sliderWidth={500}
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

      <Footer navigation={navigation} setBorder="Home" />
    </S.Wrapper>
  );
};

const styles = StyleSheet.create({
 
  cardPrice: {
    backgroundColor: '#ffffff',
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    padding: 20,
    borderColor: '#00000060',
    borderWidth:2,
  },
});

export default Home;
