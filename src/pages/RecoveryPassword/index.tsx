import React from 'react';
import {useState} from 'react';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Buttom from '../../components/Buttom';
import MyLink from '../../components/MyLink';
import {useNavigation} from '@react-navigation/native';
import * as S from './styles';

const RecoveryPassword: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    alert(email);
  };

  return (
    <S.Wrapper>
      <S.Title>Nova senha</S.Title>

      <S.Content>
        <Input
          autoCompleteType={false}
          keyboardType="email-address"
          placeholder="E-mail"
          leftIcon={<Icon name="at" size={18} color="#9d9d9d" />}
          onChangeText={text => setEmail(text)}
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

export default RecoveryPassword;
