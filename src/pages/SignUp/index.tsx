import * as S from './styles';
import React, {useEffect, useState} from 'react';
import {Buttom, UseInfo, Address, Rede} from '../../components';
import {signup} from '../../service/auth';
import {CompanyProps} from '../../types/Auth';

const logo_com_nome = require('../../assets/logo-com-nome.png');
const signup_step1 = require('../../assets/signup-step1.png');
const signup_step2 = require('../../assets/signup-step2.png');
const signup_step3 = require('../../assets/signup-step3.png');

enum STEP {
  'step1' = 'step1',
  'step2' = 'step2',
  'step3' = 'step3',
}

const SignUp: React.FC = ({navigation}: any) => {
  const [company, setCompany] = useState({} as CompanyProps);
  const [step, setStep] = useState<STEP>();

  function nextStep() {
    if (step === STEP.step1) {
      setStep(STEP.step2);
    }
    if (step === STEP.step2) {
      setStep(STEP.step3);
    }
  }

  function handleUpdateProps(nameProps: string, value: string) {
    setCompany({...company, [nameProps]: value});
  }

  function goBack() {
    if (step === STEP.step1) navigation.goBack();
    if (step === STEP.step2) setStep(STEP.step1);
    if (step === STEP.step3) setStep(STEP.step2);
  }

  function isValid() {
    return true;
  }

  const handleConfirm = async () => {
    if (isValid()) {
      // company.cep = 'any_cep';
      // company.city = 'any_city';
      // company.cnpj = 'any_cnpj';
      // company.complement = 'any_complement';
      // company.password = 'a';
      // company.passwordConfirmation = 'a';
      // company.district = 'any_district';
      // company.email = 'a@mail';
      // company.isNetwork = 'NÃO';
      // company.name = 'any_name';
      // company.networkName = 'any_network';
      // company.fuelStationNumber = '123';
      // company.state = 'any_state';
      // company.street = 'any_street';
      // company.telephone = 'any_telephone';
      // company.flag = 'BANDEIRA';

      const res = await signup(company);
      alert(res.message);
      navigation.navigate(res.url);
    }
  };

  useEffect(() => {
    setStep(STEP.step1);
  }, [navigation]);

  return (
    <S.Wrapper>
      <S.ScrollView>
        <S.LogoWrapper>
          <S.Image source={logo_com_nome} />
        </S.LogoWrapper>

        <S.WrapperSteps>
          <S.Steps active>
            <S.StepsIcon source={signup_step1} />
          </S.Steps>

          <S.Steps active={step === STEP.step2 || step === STEP.step3}>
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

          {step === STEP.step3 && (
            <Rede handleUpdateProps={handleUpdateProps} company={company} />
          )}
        </S.Container>
      </S.ScrollView>

      {step === STEP.step1 && <S.Label>Cadastrar empresa</S.Label>}
      {step === STEP.step2 && <S.Label>Cadastrar endereço</S.Label>}
      {step === STEP.step3 && <S.Label>informações da rede</S.Label>}
      <S.Footer>
        {step === STEP.step3 ? (
          <Buttom
            color="buttonConfirm"
            title="SALVAR"
            callback={handleConfirm}
          />
        ) : (
          <Buttom color="buttonDefault" title="PROXIMO" callback={nextStep} />
        )}
        <S.Goback onPress={goBack}>
          <S.GobackText>VOLTAR</S.GobackText>
        </S.Goback>
      </S.Footer>
    </S.Wrapper>
  );
};

export default SignUp;
