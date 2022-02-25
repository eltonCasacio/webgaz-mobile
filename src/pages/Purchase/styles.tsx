import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.View`
  background-color: ${Theme.colors.primary};
  flex: 1;
  padding: 0 15px;
`;

export const Label = styled.Text`
  color: ${Theme.colors.white};
  font-size: 25px;
  font-weight: bold;
  align-self: center;

`;

export const Text = styled.Text`
  color: ${Theme.colors.lightGray};
  font-size: 14px;
  margin-top: 20px;
  padding-left: 2px;
  text-transform: uppercase;
`;

export const LitersTitle = styled.Text`
  color: ${Theme.colors.lightGray};
  font-size: 14px;
  padding-left: 2px;
  text-transform: uppercase;
`;

export const Card = styled.View`
  ${() => css`
    justify-content: space-between;
    border-radius: 10px;
    padding: 10px;
    border: solid 2px #a4a2a24d;
  `}
`;

export const CardTitle = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

export const CardTitleText = styled.Text`
  color: ${Theme.colors.lightGray};
  margin-left: 5px;
  font-size: 18px;
  padding: 5px 0;
`;

export const Divider = styled.View`
  border: solid 1px #a4a2a24d;
  width: 100%;
  margin: 10px 0;
`;

export const LitersPrice = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

export const Liters = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LitersText = styled.View`
  margin-right: 10px;
  padding-left: 2px;
`;

export const LitersInput = styled.TextInput`
  background-color: ${Theme.colors.bgInput};
  border-radius: 5px;
  width: 48%;
  text-align: center;
  color: ${Theme.colors.white};
  font-size: 18px;
  height: 35px;
  padding: 0;
`;

export const Price = styled.Text`
  color: ${Theme.colors.white};
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
`;

export const Payment = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PaymentText = styled.Text`
  color: ${Theme.colors.lightGray};
  font-size: 16px;
`;

export const PaymentSelectWrapper = styled.View`
  height: 50px;
  width: 100%;
  background-color: ${Theme.colors.bgInput};
  border-radius: 5px;
`;

export const PaymentDateText = styled.Text`
  color: ${Theme.colors.lightGray};
  font-size: 18px;
`;

export const PaymentDate = styled.TouchableOpacity`
  color: ${Theme.colors.lightGray};
`;

export const PaymentInputWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 48%;
`;

export const PaymentInput = styled.TextInput`
  background-color: ${Theme.colors.bgInput};
  border-radius: 5px;
  width: 100%;
  text-align: center;
  color: ${Theme.colors.white};
  font-size: 18px;
`;

export const PaymentInputDate = styled.TouchableOpacity`
  align-items: center;
  background-color: ${Theme.colors.bgInput};
  border-radius: 5px;
  width: 100%;
  color: ${Theme.colors.white};
  padding: 12px;
`;

export const MessageFreight = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const MessageFreightTitle = styled.Text`
  color: ${Theme.colors.warning};
  font-size: 20px;
  margin-top: 5%;
`;

export const MessageFreightMsg = styled.Text`
  color: ${Theme.colors.lightGray};
  font-size: 16px;
  text-align: center;
`;

export const Button = styled.View`
  justify-content: flex-end;
  flex: 1;
  margin-bottom: 10px;
`;

export type RadioProps = {active: boolean};
export const RadioButton = styled.TouchableOpacity<RadioProps>`
  ${({active = false}) => css`
    width: 20px;
    height: 20px;
    background-color: ${!active ? '#ffffff14' : '#ffffffb5'};
    border: solid 2px #fff;
    border-radius: 200px;
  `}
`;
