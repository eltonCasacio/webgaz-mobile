import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  padding-bottom: 35px;
  background-color: ${Theme.colors.primary};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const LogoWrapper = styled.View`
  margin: ${width / 20}px 0;
  align-items: center;
`;
export const Image = styled.Image`
  width: ${width / 2.5}px;
  height: ${width / 2.5}px;
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
  margin-top: 10%;
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

export const Footer = styled.View`
  margin-top: ${width / 6}px;
`;
