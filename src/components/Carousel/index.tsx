import {View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import * as S from './styles';

const CarouselFC = () => {
  const images = [
    {image: require('../../assets/combustivel1.jpeg')},
    {image: require('../../assets/combustivel2.jpeg')},
    {image: require('../../assets/combustivel3.jpeg')},
  ];

  function renderItem({item}) {
    return <S.Image source={item.image} />;
  }

  return (
    <View>
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
    </View>
  );
};

export default CarouselFC;
