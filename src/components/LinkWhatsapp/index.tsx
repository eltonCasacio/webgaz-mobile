import React from 'react';
import {Text, StyleSheet, Image, Linking, TouchableOpacity} from 'react-native';
import Theme from '../../styles/theme';
import env from "react-native-dotenv";

export type WhatsAppProps = {
  text?: string;
  phone?: string;
};

const LinkWhatsapp: React.FC<WhatsAppProps> = ({
  text,
  phone = env.WHATSAPP,
}) => {
  const handleWhatsApp = () => {
    Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`);
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={handleWhatsApp}>
      <Text style={styles.text}>Enviar comprovante de pagamento</Text>
      <Image
        source={require('../../assets/whatsapp.png')}
        style={{width: 14, height: 14}}
      />
    </TouchableOpacity>
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
    color: Theme.colors.warning,
    marginRight: 5,
    fontSize: 16,
  },
});
export default LinkWhatsapp;
