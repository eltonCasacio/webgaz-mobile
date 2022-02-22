import React from 'react';
import * as S from './styles';
import {Header, Footer, Buttom} from '../../components';

const Purchase: React.FC = () => {
  function handleNextStep() {}
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Text>Tipo de Combustivel</S.Text>
        <S.Card>
          <S.CardTitle>
            <S.CardTitleText>Gasolina</S.CardTitleText>
            <S.CardTitleText>O</S.CardTitleText>
          </S.CardTitle>
          <S.Divider />
          <S.CardTitle>
            <S.CardTitleText>Etanol</S.CardTitleText>

            <S.CardTitleText>O</S.CardTitleText>
          </S.CardTitle>
        </S.Card>

        <S.Text>Tipo de Entrega</S.Text>
        <S.Card>
          <S.CardTitle>
            <S.CardTitleText>Retirada</S.CardTitleText>
            <S.CardTitleText>O</S.CardTitleText>
          </S.CardTitle>
          <S.Divider />
          <S.CardTitle>
            <S.CardTitleText>Colocada</S.CardTitleText>

            <S.CardTitleText>O</S.CardTitleText>
          </S.CardTitle>
        </S.Card>

        <S.LitersPrice>
          <S.Liters>
            <S.LitersText>
              <S.Text>litros:</S.Text>
            </S.LitersText>
            <S.LitersInput keyboardType="numeric" />
          </S.Liters>
          <S.Price>R$5,00</S.Price>
        </S.LitersPrice>

        <S.Payment>
          <S.PaymentInputWrapper>
            <S.PaymentText>Forma de Pagamento</S.PaymentText>
            <S.PaymentInput />
          </S.PaymentInputWrapper>

          <S.PaymentInputWrapper>
            <S.PaymentText>Data de entrega</S.PaymentText>
            <S.PaymentInput />
          </S.PaymentInputWrapper>
        </S.Payment>

        <S.MessageFreight>
          <S.MessageFreightTitle>Atenção</S.MessageFreightTitle>
          <S.MessageFreightMsg>
            Informamos que tera um acrescimo no valor total referente ao frete
          </S.MessageFreightMsg>
        </S.MessageFreight>

        <S.Button>
          <Buttom
            color="buttonDefault"
            title="PROXIMO"
            callback={handleNextStep}
          />
        </S.Button>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default Purchase;
