import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import * as S from './styles'

export type MyLinkProps = {
  screen: string;
  params?: {};
  title: string;
  navigation: any;
};

export default function index({
  navigation,
  screen = '',
  params = {},
  title,
}: MyLinkProps) {
  return (
    <S.Wrapper onPress={() => navigation.navigate(screen, params)}>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
}
