import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import * as S from './styles';
import Footer from '../../components/Footer';
import {Button} from 'react-native-elements/dist/buttons/Button';

const data = [
  {image: require('../../assets/combustivel1.jpeg')},
  {image: require('../../assets/combustivel2.jpeg')},
  {image: require('../../assets/combustivel3.jpeg')},
];
const Main = ({navigation}) => {
  function renderItem({item}) {
    return (
      <View style={styles.carousel}>
        <Image style={{width: '100%', height: '100%'}} source={item.image} />
      </View>
    );
  }

  useEffect(() => {}, []);
  return (
    <S.Wrapper>
      <View style={styles.carouselContainer}>
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
      </View>
      <View style={styles.cardPrice}>
        <Text>Gasolina R$12,00</Text>
        <Text>Etanol R$12,00</Text>
        <Button onPress={() => alert('merda')} title={'merda'}>
          Teste
        </Button>
      </View>

      <Footer navigation={navigation} setBorder="Main" />
    </S.Wrapper>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 180,
  },
  carousel: {},
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

export default Main;
