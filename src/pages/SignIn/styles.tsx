import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const SafeAreaView = styled.SafeAreaView``;

export const Wrapper = styled.View`
  height: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 0 15px;
  background-color: ${Theme.colors.primary};
`;

export const Form = styled.View`
  align-items: center;
`;

export const LogoWrapper = styled.View`
  align-items: center;
`;
export const Image = styled.Image`
  border-radius: 12px;
`;

export const Label = styled.Text`
  color: ${Theme.colors.white};
  font-size: 25px;
  font-weight: bold;
  margin-bottom: ${width / 20}px;
`;

export const MessageError = styled.Text`
  color: ${Theme.colors.buttonDanger};
  font-size: 14px;
`;

type InputParams = {hasError: boolean};
export const Input = styled.TextInput<InputParams>`
  ${({hasError = false}) => css`
    width: ${width - 30}px;
    border-radius: 12px;
    padding: 15px;
    font-size: 18px;
    color: ${Theme.colors.white};
    background-color: ${Theme.colors.bgInput};
    border: ${hasError ? 'solid 1px #D27A7A' : 'none'};
  `}
`;

export const InputWrapper = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const InputLabel = styled.Text`
  color: ${Theme.colors.white};
  margin-bottom: 2px;
  padding: 0 5px;
  font-size: 16px;
`;

export const SignupForgotPassword = styled.View`
  width: ${width - 30}px;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 15px;
`;

export const SignupForgotPasswordText = styled.Text`
  color: ${Theme.colors.white};
  font-size: 14px;
`;

export const Footer = styled.View``;
