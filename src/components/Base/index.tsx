import React from 'react';
import * as S from './styles';

export type BaseProps = {
  children: React.ReactNode;
};

const Base: React.FC<BaseProps> = props => (
  <S.Wrapper>{props.children}</S.Wrapper>
);

export default Base;
