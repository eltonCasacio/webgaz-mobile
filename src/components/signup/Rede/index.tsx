import React from 'react';
import {CompanyProps} from '../../../types/Company';
import * as S from './styles';

export type RedeProps = {
  handleUpdateProps: (nameProps: string, value: string) => void;
  company: CompanyProps;
};

const Rede: React.FC<RedeProps> = props => (
  <S.Wrapper>
    <S.InputWrapper>
      <S.InputLabel>Nome da Empresa</S.InputLabel>
      <S.Input
        hasError={false}
        onChangeText={text => props.handleUpdateProps('name', text)}
        value={props?.company?.name}
      />
    </S.InputWrapper>

    <S.InputWrapper>
      <S.InputLabel>Nome da Rede</S.InputLabel>
      <S.Input
        hasError={false}
        onChangeText={text => props.handleUpdateProps('network', text)}
        value={props?.company?.networkName}
      />
    </S.InputWrapper>
  </S.Wrapper>
);

export default Rede;
