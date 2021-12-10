import * as S from './styles';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import MyLink from '../../components/MyLink';
import Buttom from '../../components/Buttom';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const enter = () => {
    Alert.alert('Entrar');
  };

  return (
    <S.Wrapper>
      <S.Title>Login</S.Title>

      <S.Content>
        <Input
          autoCompleteType={false}
          keyboardType="email-address"
          placeholder="E-mail"
          leftIcon={<Icon name="at" size={18} color="#9d9d9d" />}
          onChangeText={text => setEmail(text)}
        />

        <Input
          autoCompleteType={false}
          placeholder="senha"
          leftIcon={<Icon name="lock" size={18} color="#9d9d9d" />}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />

        <MyLink
          screen="RecoveryPassword"
          title="Esqueci minha senha"
          navigation={navigation}
        />
      </S.Content>

      <S.Footer>
        <Buttom title="ENTRAR" callback={enter} />
        <MyLink screen="SignUp" title="Criar conta" navigation={navigation} />
      </S.Footer>
    </S.Wrapper>
  );
};

export default SignIn;
