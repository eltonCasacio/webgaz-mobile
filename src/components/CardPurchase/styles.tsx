import styled, {css} from 'styled-components/native';

export const Wrapper = styled.View`
  align-items: center;
  background-color: #ffffcd;
  padding: 5px 15px;
  margin: 0 3px;
  margin-bottom: 10px;
  border-radius: 5px;

  border-bottom-color: #dfdfdf;
  border-bottom-width: 3px;

  border-left-color: #0707077a;
  border-left-width: 2px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Status = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
`;

type StatusColorProps = {
  statusColor: string;
};
export const StatusColor = styled.View<StatusColorProps>`
  ${({statusColor}) => css`
    flex-direction: row;
    width: 15px;
    height: 15px;
    margin-right: 2px;
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
    font-weight: bold;
    color: #000;
  `}
`;
