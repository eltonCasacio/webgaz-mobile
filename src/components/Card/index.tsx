import React, {useState, useEffect} from 'react';
import {CheckBox, Divider} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import Button from '../../components/Buttom';
import * as S from './styles';

import {purchaseOrder} from '../../service/Main';

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

  const handlePurchaseOrder = async () => {
    const res = await purchaseOrder({
      type,
      shippingType,
      liters,
      total,
    });

    alert(JSON.stringify(res))
  };

  useEffect(() => {
    calculateTotal();
  }, [liters, removalChecked, priceRemoval, priceColocada]);

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
      <Button title="Realizar Pedido" callback={handlePurchaseOrder} />
    </S.Wrapper>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    borderStartWidth: 4,
    borderColor: '#ff0000',
  },
  containeShippingStyle: {
    backgroundColor: '#ede9e90',
    borderWidth: 0,
  },
  Divider: {
    backgroundColor: '#000',
    width: '100%',
    marginBottom: 10,
  },
});
