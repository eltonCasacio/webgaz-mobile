import React, {useState} from 'react';
import * as S from './styles';
import {Input} from 'react-native-elements';
import Buttom from '../../components/Buttom';
import {useNavigation} from '@react-navigation/native';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telephone, setTelephone] = useState('');

  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [complement, setComplement] = useState('');

  return (
    <S.Wrapper>
      <S.Title>Cadastro</S.Title>
      <S.WrapperCompany>
        <Input
          autoCompleteType={false}
          placeholder="Nome"
          textContentType="name"
          onChangeText={text => setName(text)}
        />

        <Input
          autoCompleteType={false}
          placeholder="CNPJ"
          keyboardType="numeric"
          onChangeText={text => setCnpj(text)}
        />

        <Input
          autoCompleteType={false}
          placeholder="Telefone"
          keyboardType="phone-pad"
          onChangeText={text => setTelephone(text)}
        />
      </S.WrapperCompany>

      <S.WrapperAddress>
        <Input
          autoCompleteType={false}
          placeholder="Rua"
          textContentType="streetAddressLine1"
          onChangeText={text => setStreet(text)}
        />

        <Input
          autoCompleteType={false}
          placeholder="CEP"
          keyboardType="numeric"
          textContentType="postalCode"
          onChangeText={text => setCep(text)}
        />

        <Input
          autoCompleteType={false}
          placeholder="Número"
          keyboardType="numeric"
          onChangeText={text => setNumber(text)}
        />
        <Input
          autoCompleteType={false}
          placeholder="Cidade"
          textContentType="addressCity"
          onChangeText={text => setCity(text)}
        />

        <Input
          autoCompleteType={false}
          placeholder="UF"
          textContentType="addressCityAndState"
          onChangeText={text => setState(text)}
        />

        <Input
          autoCompleteType={false}
          placeholder="Complemento"
          onChangeText={text => setComplement(text)}
        />
      </S.WrapperAddress>

      <S.Footer>
        <Buttom title="Confirmar" callback={() => alert('Cadastrar')} />
        <S.GoBack onPress={() => navigation.goBack()}>
          <S.GoBackText>Voltar</S.GoBackText>
        </S.GoBack>
      </S.Footer>
    </S.Wrapper>
  );
};

export default SignUp;
