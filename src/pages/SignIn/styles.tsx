import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const SafeAreaView = styled.SafeAreaView``;

export const Wrapper = styled.View`
  padding: 0 15px;
  justify-content: space-around;
  height: ${height}px;
  background-color: ${Theme.colors.primary};
`;

export const Form = styled.View`
  align-items: center;
`;

export const LogoWrapper = styled.View`
  align-items: center;
`;
export const Image = styled.Image`
  width: ${width * 0.3}px;
  height: ${width * 0.3}px;
`;

export const Label = styled.Text`
  color: ${Theme.colors.white};
  font-size: ${width * 0.08}px;
  font-weight: bold;
  align-self: center;
`;

export const MessageError = styled.Text`
  color: ${Theme.colors.buttonDanger};
  font-size: 14px;
`;

type InputParams = {hasError: boolean};
export const Input = styled.TextInput<InputParams>`
  ${({hasError = false}) => css`
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 16px;
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
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 12px;
`;

export const SignupForgotPasswordText = styled.Text`
  color: ${Theme.colors.white};
  font-size: 14px;
`;

export const Footer = styled.View`
`;
