import React, {useState} from 'react';
import * as S from './styles';
import {Input} from 'react-native-elements';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import Button from '../../components/Buttom';
import {profile} from '../../service/profile';
import {useNavigation} from '@react-navigation/native';

const Profile: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('teste@teste.com');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [name, setName] = useState('elton');
  const [cnpj, setCnpj] = useState('1216546865');
  const [telephone, setTelephone] = useState('3516564516');

  const [cep, setCep] = useState('456565546');
  const [city, setCity] = useState('vinhedo');
  const [state, setState] = useState('SP');
  const [street, setStreet] = useState('rua tal');
  const [number, setNumber] = useState('55');
  const [complement, setComplement] = useState('complemento');

  const [validated, setValidated] = useState(false);

  const update = () => {
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
      profile(data);
    }
  };

  const isValid = () => {
    return (
      !!name &&
      !!cnpj &&
      !!telephone &&
      !!cep &&
      !!city &&
      !!state &&
      !!street &&
      !!number
    );
  };

  return (
    <S.Wrapper>
      <Title>PERFIL</Title>
      <S.ScrollView>
        <S.WrapperCompany>
          <Input
            autoCompleteType={false}
            placeholder="Nome"
            textContentType="name"
            onChangeText={value => setName(value)}
            style={
              validated && name === '' && {borderWidth: 1, borderColor: 'red'}
            }
            value={name}
          />

          <Input
            autoCompleteType={false}
            placeholder="CNPJ"
            keyboardType="numeric"
            onChangeText={value => setCnpj(value)}
            style={
              validated && cnpj === '' && {borderWidth: 1, borderColor: 'red'}
            }
            value={cnpj}
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
            value={telephone}
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
            value={street}
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
            value={cep}
          />

          <Input
            autoCompleteType={false}
            placeholder="Número"
            keyboardType="numeric"
            onChangeText={value => setNumber(value)}
            style={
              validated && number === '' && {borderWidth: 1, borderColor: 'red'}
            }
            value={number}
          />

          <Input
            autoCompleteType={false}
            placeholder="Cidade"
            textContentType="addressCity"
            onChangeText={value => setCity(value)}
            style={
              validated && city === '' && {borderWidth: 1, borderColor: 'red'}
            }
            value={city}
          />

          <Input
            autoCompleteType={false}
            placeholder="UF"
            textContentType="addressCityAndState"
            onChangeText={value => setState(value)}
            style={
              validated && state === '' && {borderWidth: 1, borderColor: 'red'}
            }
            value={state}
          />

          <Input
            autoCompleteType={false}
            placeholder="Complemento"
            onChangeText={value => setComplement(value)}
            style={
              validated &&
              complement === '' && {borderWidth: 1, borderColor: 'red'}
            }
            value={complement}
          />
        </S.WrapperAddress>

        <Input
          autoCompleteType={false}
          placeholder="Email"
          keyboardType='email-address'
          onChangeText={value => setEmail(value)}
          style={
            validated && email === '' && {borderWidth: 1, borderColor: 'red'}
          }
          value={email}
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
        <Button title="ATUALIZAR" callback={update} />
      </S.ScrollView>

      <Footer navigation={navigation} setBorder="ProfileUser" />
    </S.Wrapper>
  );
};

export default Profile;
