import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.View`
  ${() => css`
    height: 100%;
    background-color: ${Theme.colors.primary};
  `}
`;
