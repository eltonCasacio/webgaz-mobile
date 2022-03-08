import React from 'react';

import {Purchase} from '../../types/Purchase';
import {ShippingCompany} from '../../types/ShippingCompany';
import {formatCurrency, formatDate} from '../../utils';
import {confirmPurchase} from '../../service/purchase';

import {useAuth} from '../../contexts/auth';

import {Buttom} from '../../components';
import * as S from './styles';

const PurchaseConfirmation: React.FC = ({route, navigation}: any) => {
  const data = route.params;
  const {user, showToast} = useAuth();

  const [purchase, setPurchase] = React.useState<Purchase>();
  const [shipping, setShipping] = React.useState<ShippingCompany>();

  function validate() {
    return user?.status === 'ACTIVE';
  }

  async function handleConfirm() {
    if (validate()) {
      const status = await confirmPurchase({
        ...purchase,
        status: 'PENDENTE',
        shippingCompany: shipping,
      });

      if (status === 201) {
        showToast({
          type: 'success',
          title: 'PEDIDO REALIZADO',
          message:
            'Enviar comprovante de pagamento para confirmação do pedido!',
        });
        navigation.navigate('inicio');
      } else {
        showToast({
          type: 'error',
          title: '',
          message: 'Não foi Possivel Realizar Pedido!',
        });
      }
    }
  }

  React.useEffect(() => {
    !data?.shippingCompany
      ? setShipping({
          cnh: '00000',
          cnpj: '00000',
          driverName: 'any_driver',
          name: 'any_name',
          plateNumber: '00000000',
        })
      : setShipping(data?.shippingCompany);

    setPurchase(data?.purchaseOrder);
  }, [data]);

  return (
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
              <S.Description>Litros </S.Description>
              <S.Value>{purchase?.qtdLiters}</S.Value>
            </S.Line>

            <S.Line>
              <S.Description>TOTAL </S.Description>
              <S.Value>R$ {formatCurrency(purchase?.totalPrice)}</S.Value>
            </S.Line>
          </S.DoubleInLine>
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
  );
};

export default PurchaseConfirmation;
