import styled from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.View`
  background-color: #2f2c44;
  height: 10%;
`;
export const Scroll = styled.ScrollView``;

export const Menu = styled.TouchableOpacity`
  justify-content: center;
`;

export const MenuTextView = styled.View`
  border-radius: 5px;
  margin: 0 10px;
  width: 100px;
  justify-content: center;
  align-items: center;
  word-break: break-all;
`;

export const MenuText = styled.Text`
  padding: 5px 0;
  font-size: 20px;
  color: ${Theme.colors.white};
`;
