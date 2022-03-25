import styled, {css} from 'styled-components/native';
import Theme from '../../../styles/theme';

export const Address = styled.View`
  width: 100%;
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
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 16px;
    color: ${Theme.colors.white};
    background-color: ${Theme.colors.bgInput};
    border: ${hasError ? 'solid 1px #D27A7A' : 'none'};
  `}
`;

export const HorizontalDirection = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Street = styled(InputWrapper)`
  flex: 1;
`;

export const Number = styled(InputWrapper)`
  width: 25%;
  margin-left: 10px;
`;

export const Telephone = styled(InputWrapper)`
   flex: 1;
`;

export const Cep = styled(InputWrapper)`
  width: 40%;
  margin-left: 10px;
`;