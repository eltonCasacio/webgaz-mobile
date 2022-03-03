import React from 'react';
import * as S from './styles';
import {PurchaseResponseProps} from '../../types/Purchase';
import {formatDate, formatCurrency} from '../../utils';

type CardPurchaseProps = {
  data: PurchaseResponseProps;
  navigation: any;
};

enum StatusColor {
  PENDENTE = '#aaaa0d',
  CANCELADO = '#aa0d0d',
  ENTREGUE = '#0c910c',
}

export default function CardPurchase({data, navigation}: CardPurchaseProps) {
  function openDetails() {
    navigation.navigate('detalhes', {purchaseOrder: data.id});
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Text>Nº {data?.fuelStationId}</S.Text>
        <S.Text>{formatDate(data?.deliveryDate)}</S.Text>
        <S.TouchableOpacity onPress={openDetails}>
          <S.Details source={require('../../assets/details.png')} />
        </S.TouchableOpacity>
      </S.Header>
      <S.Status>
        <S.StatusColor statusColor={StatusColor[data.status]}></S.StatusColor>
        <S.Text>{data?.status}</S.Text>
      </S.Status>
      <S.Description>
        <S.Text>{data.fuelType}</S.Text>
        <S.Text>Total R${formatCurrency(data.totalPrice)}</S.Text>
      </S.Description>
    </S.Wrapper>
  );
}
