import API from '../service/api';
import {ResponseSignup, SignInProps, ResponseSignIn} from '../types/Auth';
import {UserProps} from '../types/User';

export async function signIn(params: SignInProps): Promise<ResponseSignIn> {
  try {
    const {data} = await API.post('signin', params);
    return data;
  } catch (error) {
    console.debug('SERVICE::SIGNIN::Erro', JSON.stringify(error));
    return error?.response?.data;
  }
}

export async function signup(params: UserProps): Promise<ResponseSignup> {
  try {
    await API.post('signup', params);
    return {
      message: 'Empresa Cadastrada com Sucesso!',
      url: 'SignIn',
    };
  } catch (error) {
    console.debug('Erro ao cadastrar empresa', JSON.stringify(error));
    return {
      message: 'Houve um Erro ao Cadastrar a Empresa',
      url: 'SignUp',
    };
  }
}
