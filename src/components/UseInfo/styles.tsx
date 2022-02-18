import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';

export const UseInfo = styled.View`
  width: 100%;
`;

export const WrapperPassword = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputPassword = styled.View`
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

export const Label = styled.Text`
  align-self: center;
  color: ${Theme.colors.white};
  font-size: 30px;
  font-weight: bold;
  margin-top: 20%;
`;