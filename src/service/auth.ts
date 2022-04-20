import API from '../service/api';
import {ResponseSignup, SignInProps, ResponseSignIn} from '../types/Auth';
import {UserProps} from '../types/User';

export async function signIn(params: SignInProps): Promise<ResponseSignIn> {
  const {data} = await API.post('signin', params);
  return data;
}

export async function signup(params: UserProps): Promise<ResponseSignup> {
  try {
    await API.post('signup', params);
    return {
      message: 'Empresa Cadastrada com Sucesso!',
      url: 'SignIn',
    };
  } catch (error) {
    console.debug('Erro ao cadastrar empresa', JSON.stringify(error.response));
    let message = '';

    if (error?.status === 400) {
      message = error.response.data.message;
    }

    message = 'Erro no servidor';

    return {
      message,
      url: 'SignUp',
    };
  }
}
