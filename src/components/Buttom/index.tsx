import React from 'react';
import * as S from './styles';

export type ButtomProps = {
  title: string;
  callback: any;
  color: 'buttonDefault' | 'buttonDanger' | 'buttonConfirm';
};
export default function index({title, callback, color}: ButtomProps) {
  return (
    <S.Wrapper onPress={callback} color={color}>
      <S.Text>{title}</S.Text>
    </S.Wrapper>
  );
}
