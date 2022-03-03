import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export type WrapperParams = {
  color: 'buttonDefault' | 'buttonDanger' | 'buttonConfirm';
};
export const Wrapper = styled.TouchableOpacity<WrapperParams>`
  ${({color}) => css`
    width: ${width - 30}px;
    height: ${width / 7}px;
    max-height: 50px;

    background-color: ${Theme.colors[color]};
    border-radius: 12px;
    justify-content: center;
  `}
`;

export const Text = styled.Text`
  ${() => css`
    color: ${Theme.colors.white};
    font-size: 20px;
    text-align: center;
  `}
`;
