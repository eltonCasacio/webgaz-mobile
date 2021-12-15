import React, {useState, useEffect} from 'react';
import * as S from './styles';
import {StyleSheet, View} from 'react-native';
import {CheckBox, Divider, Input} from 'react-native-elements';

type shippingProps = {
  type: 'removal' | 'colocada';
};

export default function Card({type, priceRemoval = 0, priceColocada = 0}) {
  const [shippingType, setShippingType] = useState('colocada');
  const [removalChecked, setRemovalChecked] = useState(false);
  const [colocadaChecked, setColocadaChecked] = useState(true);
  const [liters, setLiters] = useState(1);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const sum =
      shippingType === 'removal'
        ? liters * priceRemoval
        : liters * priceColocada;
    setTotal(sum);
  };

  useEffect(() => {
    calculateTotal();
  }, [liters, removalChecked]);

  return (
    <S.Wrapper style={styles.containerStyle}>
      <S.Type>{type}</S.Type>

      <S.WrapperPrice>
        <S.Text>Preço</S.Text>
        <S.Text>Retirada: {priceRemoval}</S.Text>
        <S.Text>Colocada: {priceColocada}</S.Text>
      </S.WrapperPrice>

      <S.WrapperLiters>
        <S.LitersText>Litros</S.LitersText>
        <S.Liters
          autoCompleteType={'cc-number'}
          keyboardType="numeric"
          onChangeText={value => setLiters(Number(value))}
          maxLength={10}
          defaultValue={String(liters)}
        />
        <S.TotalPrice>Total: R${total}</S.TotalPrice>
      </S.WrapperLiters>

      <Divider style={styles.Divider} />
      <S.Text>Tipo de entrega</S.Text>
      <S.WrapperShippinType>
        <S.ShippingType>
          <CheckBox
            onPress={() => {
              setShippingType('removal');
              setRemovalChecked(true);
              setColocadaChecked(false);
            }}
            title="Retirada"
            checked={removalChecked}
            checkedColor="#f00"
            containerStyle={styles.containeShippingStyle}
          />
        </S.ShippingType>

        <S.ShippingType>
          <CheckBox
            onPress={() => {
              setShippingType('colocada');
              setColocadaChecked(true);
              setRemovalChecked(false);
            }}
            title="Colocada"
            checked={colocadaChecked}
            checkedColor="#f00"
            containerStyle={styles.containeShippingStyle}
          />
        </S.ShippingType>
      </S.WrapperShippinType>
      <Divider style={styles.Divider} />
    </S.Wrapper>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 0,
    elevation: 3,
  },
  containeShippingStyle: {
    backgroundColor: '#ff0',
    borderWidth: 0,
  },
  Divider: {
    backgroundColor: '#000',
    width: '100%',
    marginBottom: 15,
  },
});
