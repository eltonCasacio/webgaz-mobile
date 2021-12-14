import api from '../service/api';

interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export async function signIn({username, password}): Promise<Response> {
  console.log('INICIO funcao LOGIN::', username, password);

  try {
    const {data} = await api.post('signin', {
      email: 'teste@teste.com',
      password: '123',
    });
    return {
      token: data?.token,
      user: {
        name: username,
        email: username,
      },
    };
  } catch (error) {
    console.error('Erro ao tentar realizar signIn');
  }
}
