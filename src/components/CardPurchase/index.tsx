import React from 'react';
import * as S from './styles';

export default function CardPurchase({data, navigation}) {
  function openDetails() {
    navigation.navigate('detalhes', {data: data});
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Text>{data?.order}</S.Text>
        <S.Text>{data?.date}</S.Text>
        <S.TouchableOpacity onPress={openDetails}>
          <S.Details source={require('../../assets/details.png')} />
        </S.TouchableOpacity>
      </S.Header>
      <S.Status>
        <S.StatusColor
          statusColor={
            data.status === 'Em analise' ? '#aaaa0d' : '#0c910c'
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
