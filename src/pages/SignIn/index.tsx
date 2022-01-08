import * as S from './styles';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import MyLink from '../../components/MyLink';
import Buttom from '../../components/Buttom';
import {useAuth} from '../../contexts/auth';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [info, setInfo] = useState('');

  const {signIn} = useAuth();

  const handleSignIn = async () => {
    setUsernameError(username ? '' : 'Campo obrigatório');
    setPasswordError(password ? '' : 'Campo obrigatório');

    if (username && password) {
      const {msg, severity} = await signIn({email: username, password});
      if (severity === 'error') {
        setInfo(msg);
      }
    }
  };

  return (
    <S.Wrapper>
      <S.Content>
        <Input
          autoCompleteType={false}
          keyboardType="email-address"
          placeholder="E-mail"
          leftIcon={<Icon name="at" size={18} color="#9d9d9d" />}
          onChangeText={text => setUsername(text)}
          errorMessage={usernameError}
        />

        <Input
          autoCompleteType={false}
          placeholder="senha"
          leftIcon={<Icon name="lock" size={18} color="#9d9d9d" />}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          errorMessage={passwordError}
        />

        <S.Info>{info}</S.Info>

        <MyLink
          screen="ResetPassword"
          title="Esqueci minha senha"
          navigation={navigation}
        />
      </S.Content>

      <S.Footer>
        <Buttom title="ENTRAR" callback={handleSignIn} />
        <MyLink screen="SignUp" title="Criar conta" navigation={navigation} />
      </S.Footer>
    </S.Wrapper>
  );
};

export default SignIn;
