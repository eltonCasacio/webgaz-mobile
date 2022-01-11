import API from '../service/api';
import {CompanyType} from '../types/Company';
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
    console.log('SERVICE::SIGNIN::', data);
    return {
      token: data.token,
      user: {
        name: email,
        email: email,
      },
    };
  } catch (error) {
    console.log('SERVICE::SIGNIN::Erro', error);
  }
}

export async function signup(params: CompanyType): Promise<any> {
  try {
    const res = await API.post('signup', params);
    return res;
  } catch (error) {
    console.log('SERVICE::SIGNIN::Erro', error);
  }
}
