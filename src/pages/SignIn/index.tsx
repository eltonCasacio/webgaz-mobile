import * as S from './styles';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useAuth} from '../../contexts/auth';

import MyLink from '../../components/MyLink';
import Buttom from '../../components/Buttom';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const SignIn: React.FC = () => {
  const logo_com_nome = require('../../assets/logo-com-nome.png');

  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [messageError, setMessageError] = useState<string>();

  function validate() {
    setUsernameError(!username);
    setPasswordError(!password);

    return !!username && !!password;
  }

  const {signIn, signed} = useAuth();

  const handleSignIn = async () => {
    if (validate()) {
      signIn({email: username, password}).then(res => {
        setMessageError(signed ? '' : 'Usuário ou Senha Inválido!');
      });
    }
  };

  return (
    <S.Wrapper>
      <ScrollView>
        <S.LogoWrapper>
          <S.Image source={logo_com_nome} />
        </S.LogoWrapper>
        <S.Content>
          <S.Label>Login</S.Label>

          <S.InputWrapper>
            <S.InputLabel>Nome do Usuário</S.InputLabel>
            <S.Input
              hasError={usernameError}
              onChangeText={text => setUsername(text)}
              value={username}
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.InputLabel>Senha</S.InputLabel>
            <S.Input
              hasError={passwordError}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </S.InputWrapper>

          <S.SignupForgotPassword>
            <MyLink
              screen="ResetPassword"
              title="Esqueci minha senha"
              navigation={navigation}
            />

            <MyLink screen="SignUp" title="Cadastrar" navigation={navigation} />
          </S.SignupForgotPassword>

          {messageError && <S.MessageError>{messageError}</S.MessageError>}
        </S.Content>
      <S.Footer>
        <Buttom color="buttonDefault" title="ENTRAR" callback={handleSignIn} />
      </S.Footer>
      </ScrollView>
    </S.Wrapper>
  );
};

export default SignIn;
