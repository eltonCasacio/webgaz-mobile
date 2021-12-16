import styled from 'styled-components/native';

export const Wrapper = styled.View`
  align-items: center;
  background-color: #ffff009a;
  padding: 5px 15px;
  margin-bottom: 15px;
  border-radius: 5px;
`;

export const Type = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 18px;
`;

export const WrapperLiters = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
  width: 100%;
`;

export const LitersText = styled.Text`
  font-weight: bold;
  color: #000;
`;

export const Liters = styled.TextInput`
  width: 25%;
  text-align: center;
  padding: 0 5px;
  margin-left: 2px;
  background-color: #f1efef;
  border: solid 2px #0000001c;
  border-radius: 5px;
`;

export const TotalPrice = styled.Text`
  font-weight: bold;
  color: #000;
  text-align: right;
  width: 62%;
`;

export const WrapperShippinType = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ShippingType = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
`;

export const WrapperPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
