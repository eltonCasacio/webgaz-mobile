import React from 'react';
import Button from '../../components/Buttom';
import * as S from './styles';
import {useAuth} from '../../contexts/auth';
import {View, Text} from 'react-native';

const Main = () => {
  const {signOut, user} = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <S.Wrapper>
      <View>
        <Text>Usuário: {user.name}</Text>
        <Text>E-mail: {user.email}</Text>
      </View>
      <Button title="Sair" callback={handleSignOut} />
    </S.Wrapper>
  );
};

export default Main;
