import * as S from './styles';
import React, {useEffect, useState} from 'react';
import {Buttom, UseInfo, Address} from '../../components';

const logo_com_nome = require('../../assets/logo-com-nome.png');
const signup_step1 = require('../../assets/signup-step1.png');
const signup_step2 = require('../../assets/signup-step2.png');
const signup_step3 = require('../../assets/signup-step3.png');

export type CompanyProps = {
  cnpj: string;
  email: string;
  password: string;
  confirmPassword: string;

  cep: string;
  district: string;
  city: string;
  state: string;
  street: string;
  number: string;
  complement: string;
  telephone: string;
};

enum STEP {
  'step1' = 'step1',
  'step2' = 'step2',
  'step3' = 'step3',
}

const SignUp: React.FC = ({navigation}: any) => {
  const [company, setCompany] = useState({} as CompanyProps);
  const [step, setStep] = useState<STEP>();

  function nextStep() {
    if (step === STEP.step1) setStep(STEP.step2);
    if (step === STEP.step2) setStep(STEP.step3);
  }

  function handleUpdateProps(nameProps: string, value: string) {
    setCompany({...company, [nameProps]: value});
  }

  function goBack() {
    if (step === STEP.step1) navigation.goBack();
    if (step === STEP.step2) setStep(STEP.step1);
    if (step === STEP.step3) setStep(STEP.step2);
  }

  useEffect(() => {
    setStep(STEP.step1);
  }, [navigation]);

  // const handleConfirm = async () => {
  //   const data = {
  //     userAuth: {
  //       email: email,
  //       password: CompanyMocks.userAuth.password,
  //       passwordConfirmation: CompanyMocks.userAuth.passwordConfirmation,
  //     },
  //     info: {
  //       name: CompanyMocks.info.name,
  //       cnpj: CompanyMocks.info.cnpj,
  //       telephone: CompanyMocks.info.telephone,
  //     },
  //     address: {
  //       cep: CompanyMocks.address.cep,
  //       city: CompanyMocks.address.city,
  //       state: CompanyMocks.address.state,
  //       street: CompanyMocks.address.street,
  //       number: CompanyMocks.address.number,
  //       complement: CompanyMocks.address.complement,
  //     },
  //   };

  //   setValidated(true);

  //   if (isValid()) {
  //     const res = await signup(data);
  //     if (res.status === 201) {
  //       console.debug('CRIADO', res.status);
  //       navigation.navigate('SignIn');
  //     }

  //     console.error('NÃO CRIADO', res);
  //   }
  // };

  return (
    <S.Wrapper>
      <S.ScrollView>
        <S.LogoWrapper>
          <S.Image source={logo_com_nome} />
        </S.LogoWrapper>

        <S.WrapperSteps>
          <S.Steps active={step === STEP.step1}>
            <S.StepsIcon source={signup_step1} />
          </S.Steps>

          <S.Steps active={step === STEP.step2}>
            <S.StepsIcon source={signup_step2} />
          </S.Steps>

          <S.Steps active={step === STEP.step3}>
            <S.StepsIcon source={signup_step3} />
          </S.Steps>
        </S.WrapperSteps>
        <S.StepsSelected step={step} />

        <S.Container>
          {step === STEP.step1 && (
            <UseInfo handleUpdateProps={handleUpdateProps} company={company} />
          )}

          {step === STEP.step2 && (
            <Address handleUpdateProps={handleUpdateProps} company={company} />
          )}
        </S.Container>
      </S.ScrollView>

      <S.Footer>
        <Buttom color="buttonDefault" title="PROXIMO" callback={nextStep} />
        <S.Goback onPress={goBack}>
          <S.GobackText>VOLTAR</S.GobackText>
        </S.Goback>
      </S.Footer>
    </S.Wrapper>
  );
};

export default SignUp;
