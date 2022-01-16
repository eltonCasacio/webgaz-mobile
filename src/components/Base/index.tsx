import React from 'react';
import * as S from './styles';

import Footer from '../Footer';

export type BaseProps = {
  children: React.ReactNode;
  name: string;
};

const Base: React.FC<BaseProps> = props => (
  <S.Wrapper>
    {props.children}
    <Footer setBorder={props.name} />
  </S.Wrapper>
);

export default Base;
