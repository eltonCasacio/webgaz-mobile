import styled, {css} from 'styled-components/native';
import Theme from '../../../styles/theme';

export const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  height: 100%;
  margin-top: 28%;
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