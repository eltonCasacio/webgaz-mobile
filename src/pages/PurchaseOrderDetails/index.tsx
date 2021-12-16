import React from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Buttom from '../../components/Buttom';
import {ScrollView} from 'react-native-gesture-handler';

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
        <Text>{data?.order}</Text>
        <Text>{data?.date}</Text>
        <Text>{data?.status}</Text>
        <Text>{data?.type}</Text>
        <Text>{data?.total}</Text>
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
