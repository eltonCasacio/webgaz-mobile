import API from '../service/api';
import {responseMessage} from '../utils';

interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export async function signIn({username, password}): Promise<Response> {
  try {
    const {data} = await API.post('signin', {
      email: username,
      password: password,
    });
    return {
      token: data?.token,
      user: {
        name: username,
        email: username,
      },
    };
  } catch (error) {
    responseMessage('Erro ao tentar realizar Login', 'error');
  }
}