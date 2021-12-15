import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useAuth} from '../../contexts/auth';

export default function Footer({navigation}) {
  const {signOut} = useAuth();

  return (
    <View style={styles.Wrapper}>
      <TouchableOpacity onPress={() => navigation.push('ProfileUser')}>
        <Text style={styles.Text}>PERFIL</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Main')}>
        <Text style={styles.Text}>HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('PurchaseOrder')}>
        <Text style={styles.Text}>PEDIDOS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signOut}>
        <Text style={styles.Text}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  Text: {
    fontSize: 18,
    color: '#000',
  },
});
