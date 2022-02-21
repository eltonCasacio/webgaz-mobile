import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import Theme from '../../styles/theme';

export type WhatsAppProps = {
  text: string;
  phone: string;
};

const LinkWhatsapp: React.FC<WhatsAppProps> = params => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Enviar comprovante de pagamento</Text>
      <Image
        source={require('../../assets/whatsapp.png')}
        style={{width: 14, height: 14}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 20,
    alignSelf: 'center',
  },
  text: {
    color: Theme.colors.white,
    marginRight: 5,
    fontSize: 16,
  },
});
export default LinkWhatsapp;
