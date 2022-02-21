import React from 'react';
import Theme from '../../styles/theme';

import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';

export type ModalNotificationProps = {
  setModalVisible(value: boolean): void;
  modalVisible: boolean;
  handleNotificationRead(): void;
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardNotification: React.FC<ModalNotificationProps> = params => {
  return (
    <Modal animationType="slide" transparent visible={params.modalVisible}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Notificações</Text>
        <View>
          <Text style={styles.modalMessageText}>Notificações Notificações Notificações Notificações</Text>
        </View>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => {
            params.setModalVisible(!params.modalVisible);
            params.handleNotificationRead();
          }}>
          <Text style={styles.textStyle}>FECHAR</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    height: windowHeight / 1.04,
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: Theme.colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  buttonOpen: {
    backgroundColor: Theme.colors.buttonDanger,
    shadowColor: '#2d1d43',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  textStyle: {
    width: windowWidth / 1.3,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  modalMessageText: {
    marginBottom: 15,
    textAlign: 'justify',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});

export default CardNotification;
