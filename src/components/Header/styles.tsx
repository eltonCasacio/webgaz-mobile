import styled from 'styled-components/native';
import Theme from '../../styles/theme';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const wFraction = width / width;
const hFraction = height / height;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${Theme.colors.primary};
  padding: ${(hFraction) * 15}px ${(wFraction) * 15}px;
`;
export const ImageUser = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(wFraction) * 35}px;
  height: ${(hFraction) * 35}px;
  border-radius: 300px;
  background-color: #ffffff67;
`;
export const Location = styled.Text`
  color: aliceblue;
  font-size: 18px;
  font-weight: 600;
`;

export const Notification = styled.TouchableOpacity``;

export const NotificationCircle = styled.View`
  position: absolute;
  background-color: #eb5757;
  width: 10px;
  height: 10px;
  right: 5px;
  top: 5px;
  border-radius: 100px;
`;
