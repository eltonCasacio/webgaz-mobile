import React from 'react';
import * as S from './styles';
import {purchasesType} from '../../types/Purchase';

export type CardPurchaseDetailsPrps = {
  data: purchasesType;
  navigation: any;
};

const CardPurchaseDetails: React.FC<CardPurchaseDetailsPrps> = params => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Text>Nº {params.data.order}</S.Text>
        <S.Text>{params.data.date}</S.Text>
      </S.Header>

      <S.Description>
        <S.Text>x Lts - {params.data.type}</S.Text>
        <S.Text>R$ {params.data.total}</S.Text>
      </S.Description>

    </S.Wrapper>
  );
};

export default CardPurchaseDetails;
