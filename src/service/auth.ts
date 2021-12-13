import api from '../service/api';

interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export async function signIn({username, password}): Promise<Response> {
  return {
    token: 'jfhedjgrj45kgjdnfig78',
    user: {
      name: 'Elton',
      email: username,
    },
  };

  // try {
  //   const res = await api.post('signing', {username, password});
  //   return {
  //     token: res.data.token || 'token',
  //     user: res.data.user || {
  //       name: 'Elton',
  //       email: 'ton@mail',
  //     },
  //   };
  // } catch (error) {
  //   console.error('Erro ao tentar realizar signIn');
  // }
}
