import React from 'react';
import * as S from './styles';
import {UserProps} from '../../types/User';
import {loadUserData} from '../../service/profile';

const Profile: React.FC = ({navigation}: any) => {
  const [user, setUser] = React.useState<UserProps>();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      async function run() {
        const res = await loadUserData();
        setUser(res);
      }
      run();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <S.Wrapper>
      <S.Label>Meus Dados</S.Label>
      <S.Content>
        <S.Card>
          <S.Text>Empresa*</S.Text>
          <S.CardTitle>
            <S.CardTitleText>CNPJ</S.CardTitleText>
            <S.CardSubTitleText>{user?.cnpj}</S.CardSubTitleText>
          </S.CardTitle>
          <S.Divider />

          <S.CardTitle>
            <S.CardTitleText>Email</S.CardTitleText>
            <S.CardSubTitleText>{user?.email}</S.CardSubTitleText>
          </S.CardTitle>
        </S.Card>

        <S.Card>
          <S.Text>Localização*</S.Text>
          <S.CardTitle>
            <S.CardTitleText>Cidade</S.CardTitleText>
            <S.CardSubTitleText>{user?.city}</S.CardSubTitleText>
          </S.CardTitle>
          <S.Divider />

          <S.CardTitle>
            <S.CardTitleText>Bairro</S.CardTitleText>
            <S.CardSubTitleText>{user?.district}</S.CardSubTitleText>
          </S.CardTitle>
          <S.Divider />

          <S.CardTitle>
            <S.CardTitleText>Rua</S.CardTitleText>
            <S.CardSubTitleText>{user?.street}</S.CardSubTitleText>
          </S.CardTitle>
          <S.Divider />

          <S.CardTitle>
            <S.CardTitleText>Telefone</S.CardTitleText>
            <S.CardSubTitleText>{user?.telephone}</S.CardSubTitleText>
          </S.CardTitle>
          <S.Divider />

          <S.CardTitle>
            <S.CardTitleText>Cep</S.CardTitleText>
            <S.CardSubTitleText>{user?.cep}</S.CardSubTitleText>
          </S.CardTitle>
        </S.Card>

        <S.Card>
          <S.Text>Rede*</S.Text>
          <S.CardTitle>
            <S.CardTitleText>Bandeira</S.CardTitleText>
            <S.CardSubTitleText>{user?.flag}</S.CardSubTitleText>
          </S.CardTitle>
          <S.Divider />

          <S.CardTitle>
            <S.CardTitleText>Nome da rede</S.CardTitleText>
            <S.CardSubTitleText>{user?.networkName}</S.CardSubTitleText>
          </S.CardTitle>
        </S.Card>
      </S.Content>
      <S.Goback onPress={() => navigation.goBack()}>
        <S.GobackText>VOLTAR</S.GobackText>
      </S.Goback>
    </S.Wrapper>
  );
};

export default Profile;
