import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';

export type WrapperParams = {
  color: 'buttonDefault' | 'buttonDanger' | 'buttonConfirm';
};
export const Wrapper = styled.TouchableOpacity<WrapperParams>`
  ${({color}) => css`
    width: 100%;
    background-color: ${Theme.colors[color]};
    border-radius: 12px;
    padding: 15px;
  `}
`;

export const Text = styled.Text`
  ${() => css`
    color: ${Theme.colors.white};
    font-size: 20px;
    text-align: center;
  `}
`;
