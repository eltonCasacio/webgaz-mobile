import React from 'react';
import {Header, Footer, Buttom} from '../../components';
import * as S from './styles';

import {Purchase} from '../../types/Purchase';
import {formatNumber, formatDate} from '../../utils';

const PurchaseConfirmation: React.FC = ({route, navigation}: any) => {
  const {data} = route.params;

  const [purchase, setPurchase] = React.useState<Purchase>();

  React.useEffect(() => {
    setPurchase(data);
  }, [data]);

  function handleConfirm() {
    //Validar
    //Persistir as informações

    navigation.navigate('pedido');
  }

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Content>
          <S.PurchaseWrapper>
            <S.Title>Detalhes do Pedido</S.Title>
            <S.Line>
              <S.Description>Combustivel </S.Description>
              <S.Value>{purchase?.fuelType}</S.Value>
            </S.Line>

            <S.Line>
              <S.Description>Tipo de Entrega </S.Description>
              <S.Value>{purchase?.deliveryType}</S.Value>
            </S.Line>

            <S.Line>
              <S.Description>Data da Entrega </S.Description>
              <S.Value>{formatDate(new Date(purchase?.date))}</S.Value>
            </S.Line>

            <S.Line>
              <S.Description>Forma de Pagamento </S.Description>
              <S.Value>{purchase?.paymentType}</S.Value>
            </S.Line>

            <S.DoubleInLine>
              <S.Line>
                <S.Description>Litros: </S.Description>
                <S.Value>{purchase?.liters}</S.Value>
              </S.Line>

              <S.Line>
                <S.Description>Frete: </S.Description>
                <S.Value>R${formatNumber(purchase?.totalPrice)}</S.Value>
              </S.Line>
            </S.DoubleInLine>

            <S.Line>
              <S.Description>TOTAL</S.Description>
              <S.Value>R${formatNumber(purchase?.totalPrice)}</S.Value>
            </S.Line>
          </S.PurchaseWrapper>

          <S.ShippingWrapper>
            <S.Title>Detalhes da Transportadora</S.Title>
            <S.Column>
              <S.Description>Nome do Motorista</S.Description>
              <S.Value>{purchase?.driverName}</S.Value>
            </S.Column>

            <S.Column>
              <S.Description>Transportadora</S.Description>
              <S.Value>{purchase?.shippingName}</S.Value>
            </S.Column>

            <S.DoubleInLine>
              <S.Line>
                <S.Description>CNPJ </S.Description>
                <S.Value>{purchase?.cnpj}</S.Value>
              </S.Line>

              <S.Line>
                <S.Description>CNH </S.Description>
                <S.Value>{purchase?.cnh}</S.Value>
              </S.Line>
            </S.DoubleInLine>

            <S.Line>
              <S.Description>
                Placa
                <S.Value> {purchase?.plate}</S.Value>
              </S.Description>
            </S.Line>
          </S.ShippingWrapper>
        </S.Content>

        <S.PaymentConfirmText>
          Enviar Comprovante de Pagamento
        </S.PaymentConfirmText>

        <S.Button>
          <Buttom
            color="buttonConfirm"
            title="CONFIRMAR"
            callback={handleConfirm}
          />

          <S.Goback onPress={() => navigation.goBack()}>
            <S.GobackText>VOLTAR</S.GobackText>
          </S.Goback>
        </S.Button>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default PurchaseConfirmation;
