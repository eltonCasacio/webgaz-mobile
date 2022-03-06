import React from 'react';
import * as S from './styles';

const Profile: React.FC = ({navigation}: any) => (
  <S.Wrapper>
    <S.Label>Meus Dados</S.Label>
    <S.Content>
      <S.Card>
        <S.Text>Empresa*</S.Text>
        <S.CardTitleText>CNPJ:</S.CardTitleText>
        <S.Divider />

        <S.CardTitleText>Email:</S.CardTitleText>
      </S.Card>

      <S.Card>
        <S.Text>Localização*</S.Text>
        <S.CardTitleText>Cidade:</S.CardTitleText>
        <S.Divider />

        <S.CardTitleText>Bairro:</S.CardTitleText>
        <S.Divider />

        <S.CardTitleText>Rua:</S.CardTitleText>
        <S.Divider />

        <S.CardTitleText>Telefone:</S.CardTitleText>
        <S.Divider />

        <S.CardTitleText>Cep:</S.CardTitleText>
      </S.Card>

      <S.Card>
        <S.Text>Rede*</S.Text>
        <S.CardTitleText>Bandeira:</S.CardTitleText>
        <S.Divider />

        <S.CardTitleText>Rede:</S.CardTitleText>
        <S.Divider />

        <S.CardTitleText>Nome da rede:</S.CardTitleText>
      </S.Card>
    </S.Content>
    <S.Goback onPress={() => navigation.goBack()}>
      <S.GobackText>VOLTAR</S.GobackText>
    </S.Goback>
  </S.Wrapper>
);

export default Profile;
