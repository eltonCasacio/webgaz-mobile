import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 0 10px;
`;

export const WrapperCarousel = styled.View`
  ${() => css`
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 35%;
    padding: 10px 0;
    margin-top: 10px;
  `}
`;

export const Image = styled.Image`
  width: auto;
`;

export const CardPrice = styled.View`
  ${() => css`
    justify-content: space-between;
    height: 50%;
    border-radius: 2px;
    padding: 5px;
    background-color: #ffffff;
  `}
`;

export const WrapperFuelText = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FuelText = styled.Text`
  font-size: 20px;
`;

export const FuelPrice = styled(FuelText)`
  font-weight: bold;
`;

export const PurchaseText = styled.Text`
  color: aliceblue;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin: 20px;
`;
