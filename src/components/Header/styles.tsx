import styled from 'styled-components/native';
import Theme from '../../styles/theme'

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${Theme.colors.primary};
  padding: 20px 15px 15px;
`;
export const ImageUser = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 300px;
  background-color: #ffffff67;
`;
export const Location = styled.Text`
  color: aliceblue;
  font-size: 18px;
  font-weight: 600;
`;

export const Notification = styled.TouchableOpacity``;

export const NotificationCircle = styled.View`
  position: absolute;
  background-color: #eb5757;
  width: 10px;
  height: 10px;
  right: 15%;
  top: 10%;
  border-radius: 100px;
`;
