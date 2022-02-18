import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${Theme.colors.primary};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const LogoWrapper = styled.View``;
export const Image = styled.Image`
  width: 220px;
  height: 220px;
  border-radius: 12px;
  margin: 0 -10px;
`;

export const Label = styled.Text`
  color: ${Theme.colors.white};
  font-size: 30px;
  font-weight: bold;
`;

export const InputWrapper = styled.View`
  width: 100%;
  margin-top: 10%;
`;

export const InputLabel = styled.Text`
  color: ${Theme.colors.white};
  margin-bottom: 2px;
  padding: 0 5px;
  font-size: 16px;
`;

type InputParams = {hasError: boolean};
export const Input = styled.TextInput<InputParams>`
  ${({hasError = false}) => css`
    width: 100%;
    border-radius: 12px;
    padding: 15px;
    font-size: 18px;
    color: ${Theme.colors.white};
    background-color: ${Theme.colors.bgInput};
    border: ${hasError ? 'solid 1px #D27A7A' : 'none'};
  `}
`;

export const Info = styled.Text`
  margin-top: 50px;
  text-align: center;
  font-size: 14px;
  color: ${Theme.colors.white};
`;

export const Footer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const Goback = styled.View`
  width: 100%;
  align-items: center;
`;
