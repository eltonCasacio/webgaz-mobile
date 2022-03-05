import React from 'react';
import {useState} from 'react';
import Buttom from '../../components/Buttom';
import {useNavigation} from '@react-navigation/native';
import * as S from './styles';
import {resetPassword} from '../../service/resetPassword';

const logo_com_nome = require('../../assets/logo-com-nome.png');

const ResetPassword: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailEror, setEmailError] = useState('');
  const [validated, setValidated] = useState(false);

  const handleResetPassword = async () => {
    if (isValid()) {
      const res = await resetPassword({email});
      alert(JSON.stringify(res));
    }
  };

  const isValid = () => {
    setValidated(true);
    return !!email;
  };

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Image source={logo_com_nome} />
      </S.LogoWrapper>

      <S.Label>Nova Senha</S.Label>

      <S.Content>
        <S.InputWrapper>
          <S.InputLabel>E-mail</S.InputLabel>
          <S.Input
            hasError={!!emailEror}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </S.InputWrapper>

        <S.Info>Será enviado uma nova senha para o email informado</S.Info>
      </S.Content>

      <S.Footer>
        <Buttom
          color="buttonDefault"
          title="ENVIAR"
          callback={handleResetPassword}
        />
      </S.Footer>
      <S.Goback onPress={() => navigation.goBack()}>
        <S.GobackText>VOLTAR</S.GobackText>
      </S.Goback>
    </S.Wrapper>
  );
};

export default ResetPassword;
