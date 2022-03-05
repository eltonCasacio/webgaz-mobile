import API from '../service/api';
import {ResponseSignup, SignInProps, ResponseSignIn} from '../types/Auth';
import {CompanyProps} from '../types/Company';

export async function signIn(params: SignInProps): Promise<ResponseSignIn> {
  try {
    console.debug('SIGIN::', params);
    const {data} = await API.post('signin', params);
    return data;
  } catch (error) {
    console.debug('SERVICE::SIGNIN::Erro', error);
    return error?.response?.data;
  }
}

export async function signup(params: CompanyProps): Promise<ResponseSignup> {
  let response = {} as ResponseSignup;
  console.debug('SERVICE::SIGNUP:', params);
  try {
    await API.post('signup', params);
    console.debug('SERVICE::SIGNUP:', params);
    response.message = 'Empresa Cadastrada com Sucesso!';
    response.url = 'SignIn';
  } catch (error) {
    console.debug('SERVICE::SIGNUP::Erro', error.response.data);
    response.message = 'Houve um Erro ao Tentar Cadastrar a Empresa';
    response.url = '#';
  } finally {
    return response;
  }
}
