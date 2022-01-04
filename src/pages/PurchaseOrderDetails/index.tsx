import React from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Buttom from '../../components/Buttom';
import {ScrollView} from 'react-native-gesture-handler';
import * as S from './styles'

const PurchaseOrderDetails = ({route, navigation}) => {
  const {data} = route.params;

  function cancel() {
    Alert.alert(
      `CANCELAR PEDIDO ${data?.order}`,
      'Confirma exclusão do pedido?',
    );
  }
  return (
    <View style={styles.Wrapper}>
      <Title>DETALHES DO PEDIDO</Title>
      <ScrollView>
        <S.Text>Pedido: {data?.order}</S.Text>
        <S.Text>Data do Pedido: {data?.date}</S.Text>
        <S.Text>Status do Pedido: {data?.status}</S.Text>
        <S.Text>Tipo de Combustivel: {data?.type}</S.Text>
        <S.Text>Valor Total:{data?.total}</S.Text>
      </ScrollView>

      <Buttom title="CANCELAR PEDIDO" callback={cancel} />
      <Footer navigation={navigation} setBorder="PurchaseOrder" />
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
});

export default PurchaseOrderDetails;
