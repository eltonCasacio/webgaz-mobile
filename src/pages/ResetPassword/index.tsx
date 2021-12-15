import React from 'react';
import {useState} from 'react';
import {Input} from 'react-native-elements';
import Buttom from '../../components/Buttom';
import MyLink from '../../components/MyLink';
import {useNavigation} from '@react-navigation/native';
import * as S from './styles';
import {resetPassword} from '../../service/resetPassword';

const ResetPassword: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false);

  const handleResetPassword = async () => {
    if (isValid()) {
      const res = await resetPassword({email});
      console.log('reset senha', res);
      alert(JSON.stringify(res));
    }
  };

  const isValid = () => {
    setValidated(true);
    return !!email;
  };

  return (
    <S.Wrapper>
      <S.Title>Nova senha</S.Title>

      <S.Content>
        <Input
          autoCompleteType={false}
          keyboardType="email-address"
          placeholder="E-mail"
          onChangeText={text => setEmail(text)}
          style={
            validated && email === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />

        <S.Info>Será enviada uma nova senha para seu email</S.Info>
      </S.Content>

      <S.Footer>
        <Buttom title="Confirmar" callback={handleResetPassword} />
        <MyLink screen="SignIn" title="Voltar" navigation={navigation} />
      </S.Footer>
    </S.Wrapper>
  );
};

export default ResetPassword;
