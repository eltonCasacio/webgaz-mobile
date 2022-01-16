import styled, {css} from 'styled-components/native';

export const Wrapper = styled.View`
  /* background-color: #ffffff; */
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 40%;
`;

export const WrapperCarousel = styled.View`
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 20px;
`;

export const CardPrice = styled.Text`
  ${() => css`
    height: 100%;
    bottom: -10px;
    border-radius: 5px;
    padding: 20px;
    margin: 0 10px;
    border-width: 3px;
    border-color: #07070763;
    background-color: #ffffff;
  `}
`;

export const Image = styled.Image`
  width: auto;
  height: 90%;
`;

export const GasText = styled.Text``;
export const EtanolText = styled.Text``;
