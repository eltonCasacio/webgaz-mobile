import React from 'react';
import {Header, Footer, Buttom} from '../../components';
import * as S from './styles';

import {Purchase} from '../../types/Purchase';
import {ShippingCompany} from '../../types/ShippingCompany';
import {formatNumber, formatDate} from '../../utils';
import {confirmPurchase} from '../../service/purchase';

const PurchaseConfirmation: React.FC = ({route, navigation}: any) => {
  const data = route.params;

  const [purchase, setPurchase] = React.useState<Purchase>();
  const [shipping, setShipping] = React.useState<ShippingCompany>();
  const [message, setMessage] = React.useState<string>('Pedido Realizado com Sucesso!');

  React.useEffect(() => {
    setPurchase(data?.purchaseOrder);
    setShipping(data?.shippingCompany);
  }, [data]);

  async function handleConfirm() {
    const status = await confirmPurchase({
      ...purchase,
      shippingCompany: shipping,
    });

    if (status === 201) navigation.navigate('pedido');

    setMessage('Não foi Possivel Realizar Pedido')

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
              <S.Value>{formatDate(new Date(purchase?.deliveryDate))}</S.Value>
            </S.Line>

            <S.Line>
              <S.Description>Forma de Pagamento </S.Description>
              <S.Value>{purchase?.paymentType}</S.Value>
            </S.Line>

            <S.DoubleInLine>
              <S.Line>
                <S.Description>Litros: </S.Description>
                <S.Value>{purchase?.qtdLiters}</S.Value>
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

          {purchase?.deliveryType === 'RETIRADA' && (
            <S.ShippingWrapper>
              <S.Title>Detalhes da Transportadora</S.Title>
              <S.Column>
                <S.Description>Nome do Motorista</S.Description>
                <S.Value>{shipping?.driverName}</S.Value>
              </S.Column>

              <S.Column>
                <S.Description>Transportadora</S.Description>
                <S.Value>{shipping?.name}</S.Value>
              </S.Column>

              <S.DoubleInLine>
                <S.Line>
                  <S.Description>CNPJ </S.Description>
                  <S.Value>{shipping?.cnpj}</S.Value>
                </S.Line>

                <S.Line>
                  <S.Description>CNH </S.Description>
                  <S.Value>{shipping?.cnh}</S.Value>
                </S.Line>
              </S.DoubleInLine>

              <S.Line>
                <S.Description>
                  Placa
                  <S.Value> {shipping?.plateNumber}</S.Value>
                </S.Description>
              </S.Line>
            </S.ShippingWrapper>
          )}
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
