import styled from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.View`
  flex: 1;
  background-color: #ffffff;
  margin: 0 10px;
  padding: 0 5px;
  border-radius: 2px;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const WrapperLine = styled.View`
  width: 100%;
  padding: 5px;
`;

export const LabelKey = styled.Text`
  margin-right: 5px;
  font-weight: bold;
  font-size: 16px;
  color: ${Theme.colors.primary};
`;

export const LabelValue = styled.Text`
  border-bottom-color: #dfdfdf;
  border-bottom-width: 2px;
  font-size: 18px;
  padding-bottom: 5px;
`;

export const WrapperPhoneCnpj = styled(WrapperLine)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ViewWrapper = styled.View`
  flex: 1;
`;

export const Editar = styled.Button`
  flex: 1;
`;
