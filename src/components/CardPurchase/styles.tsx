import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.View`
  ${() => css`
    align-items: center;
    background-color: ${Theme.colors.secondary};
    padding: 5px 15px;
    margin: 0 3px;
    margin-bottom: 10px;
    border-radius: 5px;

    border-color: ${Theme.colors.gray};
    border-width: 0.3px;
  `}
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  border-bottom-color: ${Theme.colors.lightGray};
  border-bottom-width: 0.3px;
`;

export const Status = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;

  border-bottom-color: ${Theme.colors.lightGray};
  border-bottom-width: 0.3px;
`;

type StatusColorProps = {
  statusColor: string;
};
export const StatusColor = styled.View<StatusColorProps>`
  ${({statusColor}) => css`
    flex-direction: row;
    width: 15px;
    height: 15px;
    margin-right: 5px;
    border-radius: 100px;
    background-color: ${statusColor};
  `}
`;

export const Description = styled.View`
  ${() => css`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const Text = styled.Text`
  ${() => css`
    font-size: 16px;
    color: ${Theme.colors.text};
    padding: 10px 0;
  `}
`;

export const TouchableOpacity = styled.TouchableOpacity`
padding: 0 10px;
`

export const Details = styled.Image`
  width: 17px;
  height: 20px;
`;
