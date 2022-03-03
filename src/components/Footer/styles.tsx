import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const wFraction = width / width;
const hFraction = height / height;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #2f2c44;
  height: 65px;
`;

export const Menu = styled.TouchableOpacity`
  justify-content: center;
`;

export const Image = styled.Image`
  width: ${wFraction * 20}px;
  height: ${hFraction * 20}px;
`;
