import React from 'react';
import Theme from '../../styles/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import {useLinkTo} from '@react-navigation/native';
import {useAuth} from '../../contexts/auth';

import {
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export type ModalUserInfoProps = {
  setModalVisible(value: boolean): void;
  modalVisible: boolean;
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ModalUserInfo: React.FC<ModalUserInfoProps> = params => {
  const linkTo = useLinkTo();
  const {signOut, user} = useAuth();

  return (
    <Modal animationType="fade" transparent visible={params.modalVisible}>
      <View style={styles.modalView}>
        <AntDesign name="user" size={30} color="#fff" />
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => linkTo('/perfil')}>
            <AntDesign name="database" size={20} color="#fff" />
            <Text style={styles.modalMessageText}>
              - Informações do Usuário
            </Text>
          </TouchableOpacity>

          {user.status === 'ACTIVE' && (
            <>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => linkTo('/inicio')}>
                <Feather name="dollar-sign" size={20} color="#ffffffde" />
                <Text style={styles.modalMessageText}>- Tabela de Preços</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => linkTo('/pedido')}>
                <AntDesign name="shoppingcart" size={20} color="#fff" />
                <Text style={styles.modalMessageText}>- Fazer Pedido</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => linkTo('/pedidos')}>
                <Entypo name="list" size={20} color="#ffffffde" />
                <Text style={styles.modalMessageText}>- Pedidos</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.buttonSair}>Sair do App</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              params.setModalVisible(!params.modalVisible);
            }}>
            <AntDesign name="close" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    height: windowHeight / 2,
    width: windowWidth / 1.2,
    marginTop: windowHeight * 0.065,
    marginHorizontal: windowWidth * 0.095,
    backgroundColor: Theme.colors.bgInput,
    borderRadius: 5,
    paddingTop: 15,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#ffffff73',
  },
  button: {
    borderRadius: 200,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ffffff47',
  },
  textStyle: {
    color: Theme.colors.buttonDanger,
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalMessageText: {
    textAlign: 'justify',
    fontSize: 22,
    color: Theme.colors.white,
    marginLeft: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  buttonSair: {
    color: Theme.colors.buttonDanger,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ModalUserInfo;
