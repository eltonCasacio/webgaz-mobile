import API from '../service/api';
import {ResponseSignup, SignInProps, ResponseSignIn} from '../types/Auth';
import {CompanyProps} from '../types/Company';

export async function signIn(params: SignInProps): Promise<ResponseSignIn> {
  try {
    const {data} = await API.post('signin', params);
    return data;
  } catch (error) {
    console.debug('SERVICE::SIGNIN::Erro', error?.response?.data);
    return error?.response?.data;
  }
}

export async function signup(params: CompanyProps): Promise<ResponseSignup> {
  let response = {} as ResponseSignup;
  try {
    await API.post('signup', params);
    response.message = 'Empresa Cadastrada com Sucesso!';
    response.url = 'SignIn';
  } catch (error) {
    console.debug('SERVICE::SIGNUP::Erro', error.response.status);
    response.message = 'Houve um Erro ao Tentar Cadastrar a Empresa';
    response.url = '#';
  } finally {
    return response;
  }
}
