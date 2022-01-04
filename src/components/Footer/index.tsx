import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useAuth} from '../../contexts/auth';

export default function Footer({navigation, setBorder = ''}) {
  const {signOut} = useAuth();

  return (
    <View style={styles.Wrapper}>
      <ScrollView horizontal>
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
