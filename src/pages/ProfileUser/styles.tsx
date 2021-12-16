import styled from 'styled-components/native';
import {Form as Unform} from '@unform/mobile';

export const Form = styled(Unform)``;

export const Wrapper = styled.View`
  flex: 1;
`;


export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  font-size: 20px;
`;

export const WrapperCompany = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const WrapperAddress = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const GoBack = styled.TouchableOpacity``;

export const GoBackText = styled.Text`
  color: #505050;
  font-size: 18px;
`;
