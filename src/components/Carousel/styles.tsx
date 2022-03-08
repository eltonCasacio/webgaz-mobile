import styled from "styled-components/native";
import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')
const fraction = width/width


export const Image = styled.Image`
  width: auto;
  height: 100%;
  border-radius: 12px;
  margin: 0 -${fraction * 10}px;;
`;