import styled from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding: 0 15px;
  background-color: ${Theme.colors.primary};
`;

export const ScrollView = styled.ScrollView``;

export const Label = styled.Text`
  align-self: center;
  color: ${Theme.colors.white};
  font-size: 30px;
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 25px;
`;

export const SearchWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  margin: 0 4px 30px;
  border-radius: 10px;
  background-color: #2f2c44;
`;
export const SearchInput = styled.TextInput`
  width: 100%;
  color: ${Theme.colors.text};
`;
export const SearchIcon = styled.Image`
  width: 20px;
  height: 20px;
`;
