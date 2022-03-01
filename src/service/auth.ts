import API from '../service/api';
import {CompanyProps, ResponseSignup} from '../types/Signup';
import {SignInProps, ResponseSignInProps} from '../types/Auth';

export async function signIn({
  email,
  password,
}: SignInProps): Promise<ResponseSignInProps> {
  try {
    const {data} = await API.post('signin', {
      email,
      password,
    });
    return {
      token: data.token,
      user: {
        name: email,
        email: email,
      },
    };
  } catch (error) {
    console.debug('SERVICE::SIGNIN::Erro', error);
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
    console.debug('SERVICE::SIGNUP::Erro', error.response.status);
    return {
      message: 'Houve um Erro ao Tentar Cadastrar a Empresa',
      url: '#',
    };
  }
}
