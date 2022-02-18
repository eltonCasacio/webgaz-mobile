import * as S from './styles';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useAuth} from '../../contexts/auth';

import MyLink from '../../components/MyLink';
import Buttom from '../../components/Buttom';

const logo_com_nome = require('../../assets/logo-com-nome.png');

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('teste');
  const [usernameError, setUsernameError] = useState(false);

  const [password, setPassword] = useState('testes');
  const [passwordError, setPasswordError] = useState(false);

  function validate() {
    setUsernameError(!username);
    setPasswordError(!password);

    return !!username && !!password;
  }

  const {signIn} = useAuth();

  const handleSignIn = async () => {
    if (validate()) {
      const {msg, severity} = await signIn({email: username, password});
    }
  };

  return (
    <S.Wrapper>
      <S.Content>
        <S.LogoWrapper>
          <S.Image source={logo_com_nome} />
        </S.LogoWrapper>

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
      </S.Content>

      <S.Footer>
        <Buttom color="buttonDefault" title="ENTRAR" callback={handleSignIn} />
      </S.Footer>
    </S.Wrapper>
  );
};

export default SignIn;
