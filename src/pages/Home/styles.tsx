import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 0 5px;
  background-color: ${Theme.colors.primary};
`;

export const WrapperCarousel = styled.View`
  ${() => css`
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 30%;
    margin-bottom: 30px;
    margin-top: 10px;
  `}
`;

export const Image = styled.Image`
  width: auto;
  height: 100%;
  border-radius: 12px;
  margin: 0 -10px;
`;

export const Order = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const OrderText = styled.Text`
  color: ${Theme.colors.gray};
  text-align: right;
  padding-bottom: 2.8px;
  margin-right: 5px;
`;
export const OrderIcon = styled.View``;

export const CardPrice = styled.View`
  ${() => css`
    justify-content: space-between;
    border-radius: 15px;
    padding: 5px;
    border: solid 2px #a4a2a24d;
    margin-bottom: 20%;
  `}
`;

export const CardPriceIcon = styled.View``;

export const CardPriceTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardPriceTitleText = styled.Text`
  color: ${Theme.colors.white};
  margin-left: 10px;
  font-size: 22px;
  font-weight: bold;
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

export const CardPriceDate = styled.View`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px 0;
  `}
`;

export const CardPriceDateItem = styled.View`
  ${() => css`
    align-items: center;
    width: 30%;
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    border: solid 2px #a4a2a24d;
  `}
`;

export const CardPriceDateHourLabel = styled.Text`
  ${() => css`
    color: ${Theme.colors.gray};
    font-size: 18px;
  `}
`;

export const CardPriceDateHour = styled.Text`
  ${() => css`
    color: ${Theme.colors.white};
    font-size: 18px;
  `}
`;

export const CardPriceDateDayLabel = styled.Text`
  ${() => css`
    justify-content: space-between;
    height: 50%;
    border-radius: 15px;
    padding: 15px;
    border: solid 2px #a4a2a24d;
    margin-top: 10%;
    /* background-color: #ffffff; */
  `}
`;

export const CardPriceFuel = styled.View`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
  `}
`;

export const CardPriceFuelLabel = styled.Text`
  ${() => css`
    color: ${Theme.colors.gray};
    font-size: 22px;
  `}
`;

export const CardPriceFuelPrice = styled.Text`
  ${() => css`
    color: ${Theme.colors.white};
    font-size: 20px;
    font-weight: bold;
  `}
`;
