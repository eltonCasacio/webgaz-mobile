import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.View`
  flex: 1;
  padding: 15px;
  background-color: ${Theme.colors.primary};
`;

export const Label = styled.Text`
  color: ${Theme.colors.white};
  font-size: 25px;
  font-weight: bold;
  align-self: center;
`;

export const ShippingInfo = styled.View`
  flex: 1;
  width: 100%;
`;

export const WrapperCnpjCnh = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputCnpjCnh = styled.View`
  width: 47%;
  margin-top: 25px;
`;

export const InputWrapper = styled.View`
  width: 100%;
  margin-top: 25px;
`;

export const InputLabel = styled.Text`
  color: ${Theme.colors.white};
  margin-bottom: 2px;
  padding: 0 5px;
  font-size: 16px;
`;

type InputParams = {hasError?: boolean};
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
