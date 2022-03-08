import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';

export type WrapperParams = {
  color: 'buttonDefault' | 'buttonDanger' | 'buttonConfirm';
};
export const Wrapper = styled.TouchableOpacity<WrapperParams>`
  ${({color}) => css`
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colors[color]};
    border-radius: 5px;
    margin: 15px 0;
  `}
`;

export const Text = styled.Text`
  ${() => css`
    color: ${Theme.colors.white};
    font-size: 20px;
    text-align: center;
  `}
`;
