import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useAuth} from '../../contexts/auth';

import {useLinkTo} from '@react-navigation/native';

export default function Footer({setBorder = ''}) {
  const {signOut} = useAuth();
  const linkTo = useLinkTo();
  return (
    <View style={styles.Wrapper}>
      <ScrollView horizontal>
        <TouchableOpacity
          style={setBorder === 'ProfileUser' && styles.OnFocused}
          onPress={() => linkTo('/ProfileUser')}>
          <Text style={styles.Text}>PERFIL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={setBorder === 'Home' && styles.OnFocused}
          onPress={() => linkTo('/Home')}>
          <Text style={styles.Text}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={setBorder === 'PurchaseOrder' && styles.OnFocused}
          onPress={() => linkTo('/PurchaseOrder')}>
          <Text style={styles.Text}>PEDIDOS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={signOut}>
          <Text style={styles.Text}>SAIR</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Text: {
    width: 110,
    textAlign: 'center',
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#525254',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 2,
  },
  OnFocused: {
    borderBottomColor: '#b8bbc5',
    borderBottomWidth: 2,
  },
});
