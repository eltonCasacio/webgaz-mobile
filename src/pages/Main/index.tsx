import React, {useEffect, useState} from 'react';
import * as S from './styles';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Title from '../../components/Title';

const Main = ({navigation}) => {
  const [priceRemovalEtanol, setPriceRemovalEtanol] = useState(0);
  const [priceColocadaEtanol, setPriceColocadaEtanol] = useState(0);

  const [priceRemovalGasComum, setPriceRemovalGasComum] = useState(0);
  const [priceColocadaGasComum, setPriceColocadaGasComum] = useState(0);

  useEffect(() => {
    setPriceRemovalEtanol(3.87);
    setPriceColocadaEtanol(4.87);

    setPriceRemovalGasComum(6.0);
    setPriceColocadaGasComum(5.7);
  }, []);

  return (
    <S.Wrapper>
      <Title>TABELA DE PREÇOS</Title>
      <S.Cards>
        <Card
          type="Etanol"
          priceRemoval={priceRemovalEtanol}
          priceColocada={priceColocadaEtanol}
        />
        <Card
          type="Gasolina Comum"
          priceRemoval={priceRemovalGasComum}
          priceColocada={priceColocadaGasComum}
        />
      </S.Cards>

      <Footer navigation={navigation} />
    </S.Wrapper>
  );
};

export default Main;
