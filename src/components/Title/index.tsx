import React from 'react';
import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme'

export default function index({children}) {
  return <Text>{children}</Text>;
}

const Text = styled.Text`
${() => css`
  font-size: 18px;
  text-align: center;
  padding: 10px;
  color: ${Theme.colors.white};
`}
`;
