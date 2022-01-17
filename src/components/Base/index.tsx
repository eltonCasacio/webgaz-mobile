import React from 'react';
import * as S from './styles';

import Footer from '../Footer';

export type BaseProps = {
  children: React.ReactNode;
};

const Base: React.FC<BaseProps> = props => (
  <S.Wrapper>
    {props.children}
    <Footer />
  </S.Wrapper>
);

export default Base;
