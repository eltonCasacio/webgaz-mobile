import React from 'react';
import {TouchableOpacity} from 'react-native';
import * as S from './styles';

export default function CardPurchase({data, navigation}) {
  function openDetails() {
    navigation.navigate('PurchaseOrderDetails');
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Text>{data?.order}</S.Text>
        <S.Text>{data?.date}</S.Text>
        <TouchableOpacity onPress={openDetails}>
          <S.Text>Ver mais</S.Text>
        </TouchableOpacity>
      </S.Header>
      <S.Status>
        <S.StatusColor
          statusColor={
            data.status === 'Em analise' ? '#ff0' : '#0f0'
          }></S.StatusColor>
        <S.Text>{data?.status}</S.Text>
      </S.Status>
      <S.Description>
        <S.Text>{data.type}</S.Text>
        <S.Text>Total: R${data.total}</S.Text>
      </S.Description>
    </S.Wrapper>
  );
}
