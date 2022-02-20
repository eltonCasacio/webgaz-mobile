import styled from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${Theme.colors.primary};
`;

export const Label = styled.Text`
  align-self: center;
  color: ${Theme.colors.white};
  font-size: 30px;
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 25px;
`;

export const ScrollView = styled.ScrollView``;

export const Button = styled.View`
  margin: 10px 0;
`;

export const Goback = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 10px 0;
`;

export const GobackText = styled.Text`
  color: ${Theme.colors.white};
  font-size: 14px;
`;
