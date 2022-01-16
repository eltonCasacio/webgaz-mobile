import * as S from './styles';
import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import Buttom from '../../components/Buttom';
import {signup} from '../../service/auth';

import {CompanyMocks} from '../../mocks/Company';

const SignUp: React.FC = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [name, setName] = useState(CompanyMocks.info.name);
  const [cnpj, setCnpj] = useState(CompanyMocks.info.cnpj);
  const [telephone, setTelephone] = useState(CompanyMocks.info.telephone);

  const [cep, setCep] = useState(CompanyMocks.address.cep);
  const [city, setCity] = useState(CompanyMocks.address.city);
  const [state, setState] = useState(CompanyMocks.address.state);
  const [street, setStreet] = useState(CompanyMocks.address.street);
  const [number, setNumber] = useState(CompanyMocks.address.number);
  const [complement, setComplement] = useState(CompanyMocks.address.complement);

  const [validated, setValidated] = useState(false);

  const handleConfirm = async () => {
    const data = {
      userAuth: {
        email: email,
        password: CompanyMocks.userAuth.password,
        passwordConfirmation: CompanyMocks.userAuth.passwordConfirmation,
      },
      info: {
        name: CompanyMocks.info.name,
        cnpj: CompanyMocks.info.cnpj,
        telephone: CompanyMocks.info.telephone,
      },
      address: {
        cep: CompanyMocks.address.cep,
        city: CompanyMocks.address.city,
        state: CompanyMocks.address.state,
        street: CompanyMocks.address.street,
        number: CompanyMocks.address.number,
        complement: CompanyMocks.address.complement,
      },
    };

    setValidated(true);

    if (isValid()) {
      const res = await signup(data);
      if (res.status === 201) {
        console.debug('CRIADO', res.status);
        navigation.navigate('SignIn');
      }

      console.error('NÃO CRIADO', res);

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
      !!complement &&
      !!email
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
          value={name}
          style={
            validated && name === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />

        <Input
          autoCompleteType={false}
          placeholder="CNPJ"
          keyboardType="numeric"
          onChangeText={value => setCnpj(value)}
          value={cnpj}
          style={
            validated && cnpj === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />

        <Input
          autoCompleteType={false}
          placeholder="Telefone"
          keyboardType="numeric"
          onChangeText={value => setTelephone(value)}
          value={telephone}
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
          value={street}
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
          value={cep}
          style={
            validated && cep === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />

        <Input
          autoCompleteType={false}
          placeholder="Número"
          keyboardType="numeric"
          onChangeText={value => setNumber(value)}
          value={number}
          style={
            validated && number === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />

        <Input
          autoCompleteType={false}
          placeholder="Cidade"
          textContentType="addressCity"
          onChangeText={value => setCity(value)}
          value={city}
          style={
            validated && city === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />

        <Input
          autoCompleteType={false}
          placeholder="UF"
          textContentType="addressCityAndState"
          onChangeText={value => setState(value)}
          value={state}
          style={
            validated && state === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />

        <Input
          autoCompleteType={false}
          placeholder="Complemento"
          onChangeText={value => setComplement(value)}
          value={complement}
          style={
            validated &&
            complement === '' && {borderWidth: 1, borderColor: 'red'}
          }
        />
      </S.WrapperAddress>

      <Input
        autoCompleteType={false}
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={value => setEmail(value)}
        value={email}
        style={
          validated && email === '' && {borderWidth: 1, borderColor: 'red'}
        }
      />

      <Input
        autoCompleteType={false}
        placeholder="senha"
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
        value={password}
        style={
          validated && password === '' && {borderWidth: 1, borderColor: 'red'}
        }
      />

      <Input
        autoCompleteType={false}
        placeholder="confirmar senha"
        secureTextEntry={true}
        onChangeText={value => setPasswordConfirmation(value)}
        value={passwordConfirmation}
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
