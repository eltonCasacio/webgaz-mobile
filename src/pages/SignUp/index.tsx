import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {Input, Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Buttom from '../../components/Buttom';
import Icon from 'react-native-vector-icons/FontAwesome';
import {signup} from '../../service/signup';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telephone, setTelephone] = useState('');

  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');

  const [validated, setValidated] = useState(false);

  const handleConfirm = () => {
    const data = {
      userAuth: {
        email,
        password,
        passwordConfirmation,
      },
      info: {
        name,
        cnpj,
        telephone,
      },
      address: {
        cep,
        city,
        state,
        street,
        number,
        complement,
      },
    };
    setValidated(true);

    if (isValid()) {
      signup(data);
    }
  };

  const isValid = () => {
    return (
      !!password &&
      !!passwordConfirmation &&
      !!name &&
      !!cnpj &&
      !!telephone &&
      !!cep &&
      !!city &&
      !!state &&
      !!street &&
      !!number &&
      !!complement
    );
  };

  return (
    <S.Wrapper>
      <S.Title>Cadastro</S.Title>
      <S.WrapperCompany>
        <Input
          autoCompleteType={false}
          placeholder="Nome"
          textContentType="name"
          onChangeText={value => setName(value)}
          style={
            validated && name === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />

        <Input
          autoCompleteType={false}
          placeholder="CNPJ"
          keyboardType="numeric"
          onChangeText={value => setCnpj(value)}
          style={
            validated && cnpj === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />

        <Input
          autoCompleteType={false}
          placeholder="Telefone"
          keyboardType="phone-pad"
          onChangeText={value => setTelephone(value)}
          style={
            validated &&
            telephone === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />
      </S.WrapperCompany>

      <S.WrapperAddress>
        <Input
          autoCompleteType={false}
          placeholder="Rua"
          textContentType="streetAddressLine1"
          onChangeText={value => setStreet(value)}
          style={
            validated && street === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />

        <Input
          autoCompleteType={false}
          placeholder="CEP"
          keyboardType="numeric"
          textContentType="postalCode"
          onChangeText={value => setCep(value)}
          style={
            validated && cep === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />

        <Input
          autoCompleteType={false}
          placeholder="Número"
          keyboardType="numeric"
          onChangeText={value => setNumber(value)}
          style={
            validated && number === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />

        <Input
          autoCompleteType={false}
          placeholder="Cidade"
          textContentType="addressCity"
          onChangeText={value => setCity(value)}
          style={
            validated && city === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />

        <Input
          autoCompleteType={false}
          placeholder="UF"
          textContentType="addressCityAndState"
          onChangeText={value => setState(value)}
          style={
            validated && state === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />

        <Input
          autoCompleteType={false}
          placeholder="Complemento"
          onChangeText={value => setComplement(value)}
          style={
            validated &&
            complement === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />
      </S.WrapperAddress>

      <Input
        autoCompleteType={false}
        placeholder="Email"
        secureTextEntry={true}
        onChangeText={value => setEmail(value)}
        style={
          validated && email === '' && {borderWidth: 1, borderColor: 'red'}
        }
      />

      <Input
        autoCompleteType={false}
        placeholder="senha"
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
        style={
          validated && password === '' && {borderWidth: 1, borderColor: 'red'}
        }
      />

      <Input
        autoCompleteType={false}
        placeholder="confirmar senha"
        secureTextEntry={true}
        onChangeText={value => setPasswordConfirmation(value)}
        style={
          validated &&
          passwordConfirmation === '' && {borderWidth: 1, borderColor: 'red'}
        }
      />

      <S.Footer>
        <Buttom title="Confirmar" callback={handleConfirm} />
        <S.GoBack onPress={() => navigation.goBack()}>
          <S.GoBackText>Voltar</S.GoBackText>
        </S.GoBack>
      </S.Footer>
    </S.Wrapper>
  );
};

export default SignUp;
