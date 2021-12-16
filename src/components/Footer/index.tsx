import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useAuth} from '../../contexts/auth';

export default function Footer({navigation, setBorder = ''}) {
  const {signOut} = useAuth();

  return (
    <View style={styles.Wrapper}>
      <TouchableOpacity
        style={setBorder === 'ProfileUser' && styles.OnFocused}
        onPress={() => navigation.push('ProfileUser')}>
        <Text style={styles.Text}>PERFIL</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={setBorder === 'Main' && styles.OnFocused}
        onPress={() => navigation.push('Main')}>
        <Text style={styles.Text}>HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={setBorder === 'PurchaseOrder' && styles.OnFocused}
        onPress={() => navigation.push('PurchaseOrder')}>
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingRight: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#fdfd7f',
  },
  Text: {
    fontSize: 18,
    color: '#0c0000',
  },
  OnFocused: {
    borderBottomColor: '#f00',
    borderBottomWidth: 3,
  },
});
