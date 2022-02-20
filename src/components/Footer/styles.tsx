import styled from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #2f2c44;
  height: 70px;
`;

export const Menu = styled.TouchableOpacity`
  justify-content: center;
`;

export const Image = styled.Image`
  width: 25px;
  height: 25px;
`;

export const MenuTextView = styled.View``;

export const MenuText = styled.Text`
  padding: 5px 0;
  font-size: 20px;
  color: ${Theme.colors.white};
`;
