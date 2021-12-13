import React from 'react';
import Button from '../../components/Buttom';
import * as S from './styles';
import {useAuth} from '../../contexts/auth';
import {View, Text} from 'react-native';

const Main = () => {
  const {signOut, user} = useAuth();
  return (
    <S.Wrapper>
      <View>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
      </View>
      <Button title="Sair" callback={signOut} />
    </S.Wrapper>
  );
};

export default Main;
