import styled, {css} from 'styled-components/native';
import Theme from '../../../styles/theme';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const UseInfo = styled.View`
  margin: 10px 0;
`;

export const WrapperPassword = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputPassword = styled.View`
  width: ${width / 2.3}px;
`;

export const InputWrapper = styled.View`
  width: 100%;
  margin: 10px 0;
`;

export const InputLabel = styled.Text`
  color: ${Theme.colors.white};
  margin-bottom: 2px;
  padding: 0 5px;
  font-size: 14px;
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
