import API from '../service/api';
import {ResponseSignup, SignInProps, ResponseSignIn} from '../types/Auth';
import {CompanyProps} from '../types/Company';

export async function signIn(params: SignInProps): Promise<ResponseSignIn> {
  try {
    const {data} = await API.post('signin', params);
    return data;
  } catch (error) {
    console.debug('SERVICE::SIGNIN::Erro', JSON.stringify(error));
    return error?.response?.data;
  }
}

export async function signup(params: CompanyProps): Promise<ResponseSignup> {
  try {
    await API.post('signup', params);
    return {
      message: 'Empresa Cadastrada com Sucesso!',
      url: 'SignIn',
    };
  } catch (error) {
    console.debug('Erro ao criar empresa', JSON.stringify(error));
    return {
      message: 'Houve um Erro ao Tentar Cadastrar a Empresa',
      url: 'SignUp',
    };
  }
}
