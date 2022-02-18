import React from 'react';
import {CompanyProps} from '../../pages/SignUp';
import * as S from './styles';

export type UserInfoProps = {
  handleUpdateProps: (nameProps: string, value: string) => void;
  company: CompanyProps;
};

const Address: React.FC<UserInfoProps> = props => (
  <S.Address>
    <S.InputWrapper>
      <S.InputLabel>Cidade</S.InputLabel>
      <S.Input
        hasError={false}
        onChangeText={text => props.handleUpdateProps('city', text)}
        value={props.company.city}
      />
    </S.InputWrapper>

    <S.InputWrapper>
      <S.InputLabel>Bairro</S.InputLabel>
      <S.Input
        hasError={false}
        onChangeText={text => props.handleUpdateProps('district', text)}
        value={props.company.district}
      />
    </S.InputWrapper>

    <S.HorizontalDirection>
      <S.Street>
        <S.InputLabel>Rua</S.InputLabel>
        <S.Input
          hasError={false}
          onChangeText={text => props.handleUpdateProps('street', text)}
          value={props.company.street}
        />
      </S.Street>

      <S.Number>
        <S.InputLabel>Número</S.InputLabel>
        <S.Input
          hasError={false}
          onChangeText={text => props.handleUpdateProps('number', text)}
          value={props.company.number}
        />
      </S.Number>
    </S.HorizontalDirection>

    <S.HorizontalDirection>
      <S.Telephone>
        <S.InputLabel>Telefone</S.InputLabel>
        <S.Input
          hasError={false}
          onChangeText={text => props.handleUpdateProps('telephone', text)}
          value={props.company.telephone}
        />
      </S.Telephone>

      <S.Cep>
        <S.InputLabel>Cep</S.InputLabel>
        <S.Input
          hasError={false}
          onChangeText={text => props.handleUpdateProps('cep', text)}
          value={props.company.cep}
        />
      </S.Cep>
    </S.HorizontalDirection>

    <S.Label>Cadastrar Empresa</S.Label>
  </S.Address>
);

export default Address;
