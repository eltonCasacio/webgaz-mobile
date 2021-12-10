import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  font-size: 20px;
  padding-top: 20px;
`;

export const Content = styled.View`
  flex: 3;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const Footer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Enter = styled.TouchableOpacity`
  background-color: #f9fc42;
  padding: 2% 35%;
  border-radius: 5px;
  margin-bottom: 15px;
  border: solid 2px #c2c50049;
`;

export const EnterText = styled.Text`
  color: #797979;
  font-size: 18px;
`;
