import React from 'react';
import {formatCurrency, formatDate} from '../../utils';
import {confirmPurchase} from '../../service/purchase';

import {useAuth} from '../../contexts/auth';

import {Buttom} from '../../components';
import * as S from './styles';
import {ScrollView} from 'react-native';

const PurchaseConfirmation: React.FC = ({route, navigation}: any) => {
  const data = route.params;
  const {user, showToast} = useAuth();

  function validate() {
    return user?.status === 'ACTIVE';
  }

  async function handleConfirm() {
    if (validate()) {
      const status = await confirmPurchase({
        ...data.purchaseOrder,
        status: 'PENDENTE',
        shippingCompany: data?.shippingCompany,
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
        console.debug('ERRO AO CONFIRMAR PEDIDO', status);

        showToast({
          type: 'error',
          title: 'Confirmação de pedido',
          message: status.message,
        });
      }
    }
  }

  return (
    <S.Wrapper>
      <ScrollView>
        <S.PurchaseWrapper>
          <S.Title>Detalhes do Pedido</S.Title>
          <S.Line>
            <S.Description>Combustivel </S.Description>
            <S.Value>{data?.purchaseOrder?.fuelType}</S.Value>
          </S.Line>

          <S.Line>
            <S.Description>Tipo de Entrega </S.Description>
            <S.Value>{data?.purchaseOrder?.deliveryType}</S.Value>
          </S.Line>

          <S.Line>
            <S.Description>Data da Entrega </S.Description>
            <S.Value>
              {formatDate(new Date(data?.purchaseOrder.deliveryDate))}
            </S.Value>
          </S.Line>

          <S.Line>
            <S.Description>Forma de Pagamento </S.Description>
            <S.Value>{data?.purchaseOrder?.paymentType}</S.Value>
          </S.Line>

          <S.DoubleInLine>
            <S.Line>
              <S.Description>Litros </S.Description>
              <S.Value>{data?.purchaseOrder?.qtdLiters}</S.Value>
            </S.Line>

            <S.Line>
              <S.Description>TOTAL </S.Description>
              <S.Value>
                R$ {formatCurrency(data?.purchaseOrder?.totalPrice)}
              </S.Value>
            </S.Line>
          </S.DoubleInLine>
        </S.PurchaseWrapper>

        {data?.purchaseOrder?.deliveryType === 'RETIRADA' && (
          <S.ShippingWrapper>
            <S.Title>Detalhes da Transportadora</S.Title>
            <S.Column>
              <S.Description>Nome do Motorista</S.Description>
              <S.Value>{data?.shippingCompany?.shippingDriverName}</S.Value>
            </S.Column>

            <S.Column>
              <S.Description>Transportadora</S.Description>
              <S.Value>{data?.shippingCompany?.shippingName}</S.Value>
            </S.Column>

            <S.DoubleInLine>
              <S.Line>
                <S.Description>CNPJ </S.Description>
                <S.Value>{data?.shippingCompany?.shippingCnpj}</S.Value>
              </S.Line>

              <S.Line>
                <S.Description>CNH </S.Description>
                <S.Value>{data?.shippingCompany?.shippingDriverCnh}</S.Value>
              </S.Line>
            </S.DoubleInLine>

            <S.Line>
              <S.Description>Placa </S.Description>
              <S.Value> {data?.shippingCompany?.shippingPlateNumber}</S.Value>
            </S.Line>
          </S.ShippingWrapper>
        )}
      </ScrollView>

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
