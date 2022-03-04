import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const wFraction = width / width;
const hFraction = height / height;

export const Wrapper = styled.View`
  padding: 15px;
  background-color: ${Theme.colors.primary};
  height: ${height - hFraction * 185}px;
  justify-content: space-around;
`;

export const Label = styled.Text`
  color: ${Theme.colors.white};
  font-size: 25px;
  font-weight: bold;
  align-self: center;
`;

export const Form = styled.View``;

export const WrapperCnpjCnh = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${hFraction * 20}px;
`;

export const InputCnpjCnh = styled.View`
  width: ${width / 2.25}px;
`;

export const InputWrapper = styled.View`
  width: 100%;
  margin-bottom: ${hFraction * 20}px;
`;

export const InputLabel = styled.Text`
  color: ${Theme.colors.white};
  font-size: 16px;
`;

type InputParams = {hasError?: boolean};
export const Input = styled.TextInput<InputParams>`
  ${({hasError = false}) => css`
    border-radius: 7px;
    padding: 10px;
    font-size: 18px;
    color: ${Theme.colors.white};
    background-color: ${Theme.colors.bgInput};
    border: ${hasError ? 'solid 1px #D27A7A' : 'none'};
  `}
`;

export const Button = styled.View`
  width: 100%;
  margin-top: 30px;
`;

export const Goback = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 10px 0;
  margin-top: 5px;
`;

export const GobackText = styled.Text`
  color: ${Theme.colors.white};
  font-size: 14px;
`;
