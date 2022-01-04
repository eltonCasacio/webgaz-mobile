import React, {useEffect, useState} from 'react';
import * as S from './styles';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Title from '../../components/Title';
import {ScrollView} from 'react-native-gesture-handler';

const Buy = ({navigation}) => {
  const [priceRemovalEtanol, setPriceRemovalEtanol] = useState(0);
  const [priceColocadaEtanol, setPriceColocadaEtanol] = useState(0);

  const [priceRemovalGasComum, setPriceRemovalGasComum] = useState(0);
  const [priceColocadaGasComum, setPriceColocadaGasComum] = useState(0);

  const [purchaseEtanol, setPurchaseEtanol] = useState();
  const [purchaseGas, setPurchaseGas] = useState();

  useEffect(() => {
    setPriceRemovalEtanol(3.87);
    setPriceColocadaEtanol(4.87);

    setPriceRemovalGasComum(6.0);
    setPriceColocadaGasComum(5.7);
  }, []);

  return (
    <S.Wrapper>
      <Title>TABELA DE PREÇOS</Title>
      <ScrollView>
        <S.Cards>
          <Card
            type="Etanol"
            priceRemoval={priceRemovalEtanol}
            priceColocada={priceColocadaEtanol}
            setPurchase={setPurchaseEtanol}
          />
          <Card
            type="Gasolina Comum"
            priceRemoval={priceRemovalGasComum}
            priceColocada={priceColocadaGasComum}
            setPurchase={setPurchaseGas}
          />
        </S.Cards>
      </ScrollView>
      <Footer navigation={navigation} setBorder="Main" />
    </S.Wrapper>
  );
};

export default Buy;
