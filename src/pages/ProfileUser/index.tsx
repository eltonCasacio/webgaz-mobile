import React from 'react';
import * as S from './styles';
import {Title, Footer, Header} from '../../components';
import {CompanyMocks} from '../../mocks/Company';

const Profile: React.FC = () => {
  const handleEdit = () => {
    alert('Implementar Editar');
  };
  return (
    <>
     <Header />
      <S.Wrapper>
        <S.ScrollView>
          <S.WrapperLine>
            <S.LabelKey>Nome</S.LabelKey>
            <S.LabelValue>{CompanyMocks.info.name}</S.LabelValue>
          </S.WrapperLine>

          <S.WrapperPhoneCnpj>
            <S.ViewWrapper>
              <S.LabelKey>Telefone:</S.LabelKey>
              <S.LabelValue>{CompanyMocks.info.telephone}</S.LabelValue>
            </S.ViewWrapper>
            <S.ViewWrapper>
              <S.LabelKey>CNPJ:</S.LabelKey>
              <S.LabelValue>{CompanyMocks.info.cnpj}</S.LabelValue>
            </S.ViewWrapper>
          </S.WrapperPhoneCnpj>

          <S.WrapperLine>
            <S.LabelKey>Rua</S.LabelKey>
            <S.LabelValue numberOfLines={1}>
              {CompanyMocks.address.street}
            </S.LabelValue>
          </S.WrapperLine>

          <S.WrapperPhoneCnpj>
            <S.ViewWrapper>
              <S.LabelKey>Cidade</S.LabelKey>
              <S.LabelValue>{CompanyMocks.address.city}</S.LabelValue>
            </S.ViewWrapper>
            <S.ViewWrapper>
              <S.LabelKey>UF</S.LabelKey>
              <S.LabelValue>{CompanyMocks.address.state}</S.LabelValue>
            </S.ViewWrapper>
          </S.WrapperPhoneCnpj>

          <S.WrapperPhoneCnpj>
            <S.ViewWrapper>
              <S.LabelKey>CEP:</S.LabelKey>
              <S.LabelValue>{CompanyMocks.address.cep}</S.LabelValue>
            </S.ViewWrapper>
            <S.ViewWrapper>
              <S.LabelKey>Número</S.LabelKey>
              <S.LabelValue>{CompanyMocks.address.number}</S.LabelValue>
            </S.ViewWrapper>
          </S.WrapperPhoneCnpj>

          <S.WrapperLine>
            <S.LabelKey>Complemento</S.LabelKey>
            <S.LabelValue>{CompanyMocks.address.complement}</S.LabelValue>
          </S.WrapperLine>

          <S.WrapperLine>
            <S.LabelKey>Email</S.LabelKey>
            <S.LabelValue>{CompanyMocks.userAuth.email}</S.LabelValue>
          </S.WrapperLine>

          <S.Editar title="Editar" onPress={handleEdit}></S.Editar>
        </S.ScrollView>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default Profile;
