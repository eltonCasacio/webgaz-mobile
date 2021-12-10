import React from 'react';
import * as S from './styles';

export type ButtomProps = {
  title: string;
  callback: any;
};
export default function index({title, callback}: ButtomProps) {
  return (
    <S.Wrapper onPress={callback}>
      <S.Text>{title}</S.Text>
    </S.Wrapper>
  );
}
