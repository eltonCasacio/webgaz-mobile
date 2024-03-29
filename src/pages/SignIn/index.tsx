import * as S from './styles';
import React, {useEffect, useState} from 'react';
import {useAuth} from '../../contexts/auth';
import MyLink from '../../components/MyLink';
import Buttom from '../../components/Buttom';
import {ScrollView} from 'react-native';

const SignIn: React.FC = ({navigation}: any) => {
  const logo_com_nome = require('../../assets/logo-com-nome.png');

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

  const {signIn, setUser} = useAuth();

  const handleSignIn = async () => {
    if (validate()) {
      const response = await signIn({email: username, password});
      setMessageError(!response && 'Usuário ou Senha Inválido');
      if (response) setUser(response);
    }
  };

  function clearForm() {
    setUsername('');
    setPassword('');
    setPasswordError(false);
    setUsernameError(false);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      clearForm();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <S.Wrapper>
      <ScrollView>
        <S.LogoWrapper>
          <S.Image source={logo_com_nome} />
        </S.LogoWrapper>

        <S.Label>Login</S.Label>

        {messageError && <S.MessageError>{messageError}</S.MessageError>}

        <S.Form>
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
        </S.Form>
      </ScrollView>
      <S.Footer>
        <Buttom color="buttonDefault" title="ENTRAR" callback={handleSignIn} />
      </S.Footer>
    </S.Wrapper>
  );
};

export default SignIn;
