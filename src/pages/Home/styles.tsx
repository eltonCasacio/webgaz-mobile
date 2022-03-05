import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';
import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')
const fraction = width/width

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: space-around;
  background-color: ${Theme.colors.primary};
`;

export const WrapperCarousel = styled.View`
  ${() => css`
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: ${width/2.5}px;
  `}
`;

export const Image = styled.Image`
  width: auto;
  height: 100%;
  border-radius: 12px;
  margin: 0 -${fraction * 10}px;;
`;

export const Order = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const SendDocument = styled.Text`
  text-align: center;
`;
export const OrderIcon = styled.View``;

export const CardPrice = styled.View`
  ${() => css`
    align-self: center;
    justify-content: space-between;
    border-radius: 15px;
    padding: 10px;
    border: solid 2px #a4a2a24d;
    background-color: ${Theme.colors.secondary};
    height: ${height / 2.5}px;
    width: ${width - 20}px;
  `}
`;

export const CardPriceIcon = styled.View``;

export const CardPriceTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
`;

export const CardPriceTitleText = styled.Text`
  color: ${Theme.colors.white};
  margin-left: 5px;
  font-size: ${height/height * 20}px;
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
    margin: 20px 0 10px;
  `}
`;

export const CardPriceDateItem = styled.View`
  ${() => css`
    align-items: center;
    width: 45%;
    border-radius: 15px;
    padding: 5px;
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
    font-size: 20px;
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
    font-size: ${height/height * 20}px;
    text-transform: uppercase;
  `}
`;

export const CardPriceFuelPrice = styled.Text`
  ${() => css`
    color: ${Theme.colors.white};
    font-size: ${height/height * 20}px;
    font-weight: bold;
  `}
`;

export const WhatsApp = styled.View``;

export const WhatsAppText = styled.Text`
  color: ${Theme.colors.white};
  font-size: 16px;
`;

export const PurchaseButton = styled.TouchableOpacity``;

export const PurchaseButtonText = styled.Text`
  color: ${Theme.colors.white};
  font-size: ${fraction * 16}px;
  font-weight: bold;
  border-top-width: 1px;
  border-top-color: #a4a2a24d;
  width: 100%;
  text-align: center;
  padding-top: ${height/height * 16}px;
  padding-bottom: ${height/height * 5}px;
  margin-top: ${height/height * 10}px;
`;

export const OperationDateItem = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 0 10px;
`;

export const Operation = styled.View`
  align-items: center;
  margin: 20px;
`;

export const OperationTitleText = styled.Text`
  color: ${Theme.colors.white};
  font-size: 14px;
`;

export const OperationDate = styled.View`
  flex-direction: row;
`;

export const OperationHourLabel = styled.Text`
  ${() => css`
    color: ${Theme.colors.lightGray};
    font-size: 14px;
  `}
`;

export const MessageError = styled.Text`
  color: ${Theme.colors.buttonDanger};
  font-size: 14px;
  text-align: center;
`;
