import * as S from './styles';
import React, {useEffect, useState} from 'react';

import {Buttom, UseInfo, Address, Rede} from '../../components';
import {signup} from '../../service/auth';
import {UserProps} from '../../types/User';
import {toast} from '../../types/Utils';

import {useAuth} from '../../contexts/auth';

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
  const [company, setCompany] = useState({} as UserProps);
  const [step, setStep] = useState<STEP>();
  const {showToast} = useAuth();

  function showMessageAlert(param: toast) {
    showToast({
      type: param.type,
      title: param.title || 'Preencha Todos Os Campos',
      message: param.message || 'Os Campos com * são Obrigatórios',
    });
  }

  function nextStep() {
    if (step === STEP.step1) {
      if (validateUseInfo()) setStep(STEP.step2);
    }
    if (step === STEP.step2) {
      if (validateAddress()) setStep(STEP.step3);
    }
  }

  function goBack() {
    if (step === STEP.step1) navigation.goBack();
    if (step === STEP.step2) setStep(STEP.step1);
    if (step === STEP.step3) setStep(STEP.step2);
  }

  function handleUpdateProps(nameProps: string, value: string) {
    setCompany({...company, [nameProps]: value});
  }

  function validateUseInfo() {
    if (!company.password || !company.passwordConfirmation) {
      showMessageAlert({type: 'error'});
      return false;
    }

    if (company.password !== company.passwordConfirmation) {
      showMessageAlert({
        type: 'error',
        title: 'Verifique as Senhas',
        message: 'As senhas devem ser iguais',
      });
      return false;
    }

    return true;
  }

  function validateAddress() {
    if (
      !company.city ||
      !company.district ||
      !company.street ||
      !company.fuelStationNumber ||
      !company.telephone ||
      !company.cep
    ) {
      showMessageAlert({type: 'error'});
      return false;
    }
    return true;
  }

  function validateConfirm() {
    if (!company.name) {
      showMessageAlert({type: 'error'});
      return false;
    }
    return true;
  }

  const handleConfirm = async () => {
    if (!validateConfirm()) return;

    company.isNetwork = company.networkName ? 'SIM' : 'NÃO';

    try {
      const res = await signup(company);
      showToast({
        type: res.url === 'SignIn' ? 'success' : 'error',
        title: 'CADASTRAR EMPRESA',
        message: res.message,
      });
      navigation.navigate(res.url);
    } catch (error) {
      showToast({
        type: 'error',
        title: 'CADASTRAR EMPRESA',
        message: error,
      });
    }
  };

  function clearForm() {
    setStep(STEP.step1);

    setCompany({
      name: '',
      password: '',
      passwordConfirmation: '',
      networkName: '',
      isNetwork: '',
      cep: '',
      city: '',
      district: '',
      street: '',
      fuelStationNumber: '',
      telephone: '',
      cnpj: '',
      email: '',
      flag: '',
    });
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      clearForm();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    setStep(STEP.step1);
  }, [navigation]);

  return (
    <S.ScrollView>
      <S.Wrapper>
        <S.LogoWrapper>
          <S.Image source={logo_com_nome} />
        </S.LogoWrapper>
        {step === STEP.step1 && <S.Label>Cadastrar empresa</S.Label>}
        {step === STEP.step2 && <S.Label>Cadastrar endereço</S.Label>}
        {step === STEP.step3 && <S.Label>informações da rede</S.Label>}
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

        <S.Form>
          {step === STEP.step1 && (
            <UseInfo handleUpdateProps={handleUpdateProps} company={company} />
          )}

          {step === STEP.step2 && (
            <Address handleUpdateProps={handleUpdateProps} company={company} />
          )}

          {step === STEP.step3 && (
            <Rede handleUpdateProps={handleUpdateProps} company={company} />
          )}
        </S.Form>
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
    </S.ScrollView>
  );
};

export default SignUp;
