import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Title from '../../components/Title';
import CardPurchase from '../../components/CardPurchase';
import Footer from '../../components/Footer';

const pedidos = [
  {
    order: 1,
    date: '01-01-2022',
    status: 'Em analise',
    type: 'Gasolina',
    total: 25.0,
  },
  {
    order: 2,
    date: '01-01-2022',
    status: 'Pedido entregue',
    type: 'Etanol',
    total: 19.0,
  },
  {
    order: 3,
    date: '01-01-2021',
    status: 'Em analise',
    type: 'Etanol-Gasolina',
    total: 55.0,
  },
];

const PurchaseOrder = ({navigation}) => {
  return (
    <View style={styles.Wrapper}>
      <Title>PEDIDOS</Title>
      <ScrollView>
        {pedidos.map(item => (
          <CardPurchase key={item.order} data={item} navigation={navigation}/>
        ))}
      </ScrollView>
      <Footer navigation={navigation} setBorder="PurchaseOrder" />
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
});

export default PurchaseOrder;
