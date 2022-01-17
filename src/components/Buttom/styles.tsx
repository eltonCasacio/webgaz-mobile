import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.TouchableOpacity`
  ${() => css`
    width: 100%;
    background-color: ${Theme.colors.secondary};
    border-radius: 2px;
    padding: 5px;
  `}
`;

export const Text = styled.Text`
  ${() => css`
    color: ${Theme.colors.white};
    font-size: 20px;
    text-align: center;
  `}
`;