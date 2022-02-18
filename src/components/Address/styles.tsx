import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';

export const Address = styled.View`
  width: 100%;
`;

export const InputWrapper = styled.View`
  width: 100%;
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

export const HorizontalDirection = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Street = styled(InputWrapper)`
  width: 70%;
`;

export const Number = styled(InputWrapper)`
  width: 25%;
`;

export const Telephone = styled(InputWrapper)`
  width: 55%;
`;

export const Cep = styled(InputWrapper)`
  width: 40%;
`;

export const Label = styled.Text`
  align-self: center;
  color: ${Theme.colors.white};
  font-size: 30px;
  font-weight: bold;
  margin-top: 20%;
`;
