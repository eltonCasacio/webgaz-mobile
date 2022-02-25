import React from 'react';
import * as S from './styles';
import {PurchaseOrderProps} from '../../pages/PurchaseOrder';

type CardPurchaseProps = {
  data: PurchaseOrderProps;
  navigation: any;
};

export default function CardPurchase({data, navigation}: CardPurchaseProps) {
  function openDetails() {
    navigation.navigate('detalhes', {purchaseOrder: data.order});
  }

  React.useEffect(() => {
    console.log(data);
  }, [data]);

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
        <S.Text>{data.fuelType}</S.Text>
        <S.Text>Total: R${data.totalPrice}</S.Text>
      </S.Description>
    </S.Wrapper>
  );
}
