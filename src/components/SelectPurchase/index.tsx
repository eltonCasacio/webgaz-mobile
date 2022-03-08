import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Theme from '../../styles/theme';

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export type SelectPurchaseProps = {
  options: string[];
  option?: string;
  onChangeSelected: (value: string) => void;
};

const {width, height} = Dimensions.get('window');

const SelectPurchase: React.FC<SelectPurchaseProps> = params => {
  const [showModal, setShowModal] = React.useState(false);

  function handleChangeSelected(text: string) {
    params.onChangeSelected(text);
    setShowModal(false);
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setShowModal(!showModal)}>
        <Text style={styles.optionText} numberOfLines={1}>
          {params.option}
        </Text>
        <AntDesign name="down" color={Theme.colors.lightGray} size={16} />
      </TouchableOpacity>
      <Modal
        transparent
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}>
        <SafeAreaView>
          <View style={styles.modalContainer}>
            <View style={styles.wrapperItem}>
              {params.options.map(item => (
                <TouchableOpacity
                  key={item}
                  style={styles.menuItem}
                  onPress={() => handleChangeSelected(item)}>
                  <AntDesign name="arrowright" size={20} color="#fff" />
                  <Text style={styles.modalMessageText}> {item}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setShowModal(!showModal)}>
              <AntDesign name="close" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
  },
  optionText: {
    fontSize: 16,
    color: Theme.colors.lightGray,
    width: '80%',
  },
  modalContainer: {
    justifyContent: 'space-between',

    position: 'absolute',
    top: height / 9,
    left: 15,

    height: height / 1.7,
    width: width - 30,

    paddingTop: 15,
    paddingHorizontal: 15,

    borderRadius: 10,
    backgroundColor: Theme.colors.bgInput,
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
    alignItems: 'center',
    width: 45,
    height: 45,
    borderRadius: 200,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ffffff47',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  modalMessageText: {
    textAlign: 'justify',
    fontSize: 22,
    color: Theme.colors.white,
    marginLeft: 5,
  },
  wrapperItem: {},
});
export default SelectPurchase;
