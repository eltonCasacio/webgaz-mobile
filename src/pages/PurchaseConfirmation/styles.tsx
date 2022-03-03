import styled from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${Theme.colors.primary};
  padding: 15px;
`;

export const Content = styled.View`
  width: 100%;
  justify-content: space-between;
  flex: 1;
  margin: 20px 0;
`;

export const PurchaseWrapper = styled.View``;

export const ShippingWrapper = styled.View``;

export const Line = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
`;

export const Title = styled.Text`
  color: ${Theme.colors.white};
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: ${Theme.colors.gray};
  font-size: 18px;
`;

export const PaymentConfirmText = styled.Text`
  color: ${Theme.colors.warning};
  font-size: 18px;
  text-align: center;
  margin: 10px 0 20px;
`;

export const Value = styled.Text`
  color: ${Theme.colors.lightGray};
  font-size: 16px;
`;

export const Button = styled.View`
  width: 100%;
`;

export const Goback = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 10px 0 0;
`;

export const GobackText = styled.Text`
  color: ${Theme.colors.white};
  font-size: 14px;
`;

export const DoubleInLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;

export const Column = styled.View`
  justify-content: space-between;
  margin: 5px 0;
`;

export const InputCnpjCnh = styled.View`
  width: 47%;
  margin-top: 25px;
`;
