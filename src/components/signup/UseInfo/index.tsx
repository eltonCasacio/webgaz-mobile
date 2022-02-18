import React from 'react';
import {CompanyProps} from '../../../pages/SignUp';
import * as S from './styles';

export type UserInfoProps = {
  handleUpdateProps: (nameProps: string, value: string) => void;
  company: CompanyProps;
};

const UserInfo: React.FC<UserInfoProps> = props => {
  return (
    <S.UseInfo>
      <S.InputWrapper>
        <S.InputLabel>CNPJ</S.InputLabel>
        <S.Input
          hasError={false}
          keyboardType="numeric"
          onChangeText={text => props.handleUpdateProps('cnpj', text)}
          value={props.company.cnpj}
        />
      </S.InputWrapper>

      <S.InputWrapper>
        <S.InputLabel>E-mail</S.InputLabel>
        <S.Input
          hasError={false}
          keyboardType="email-address"
          onChangeText={text => props.handleUpdateProps('email', text)}
          value={props.company.email}
        />
      </S.InputWrapper>

      <S.WrapperPassword>
        <S.InputPassword>
          <S.InputLabel>Senha</S.InputLabel>
          <S.Input
            hasError={false}
            secureTextEntry
            onChangeText={text => props.handleUpdateProps('password', text)}
            value={props.company.password}
          />
        </S.InputPassword>

        <S.InputPassword>
          <S.InputLabel>Confirmar Senha</S.InputLabel>
          <S.Input
            hasError={false}
            secureTextEntry
            onChangeText={text =>
              props.handleUpdateProps('confirmPassword', text)
            }
            value={props.company.confirmPassword}
          />
        </S.InputPassword>
      </S.WrapperPassword>
    </S.UseInfo>
  );
};

export default UserInfo;
