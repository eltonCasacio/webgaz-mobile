import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.View`
  ${() => css`
    flex: 1;
    justify-content: space-between;
    padding: ${Theme.spacings.xxsmall};
    background-color: ${Theme.colors.mainBg};
  `}
`;
