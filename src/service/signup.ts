import API from '../service/api';
import {responseMessage} from '../utils';

export type SignUpProps = {
  userAuth: {
    email: string;
    password: string;
    passwordConfirmation: string;
  };
  info: {
    name: string;
    cnpj: string;
    telephone: string;
  };
  address: {
    cep: string;
    city: string;
    state: string;
    street: string;
    number: string;
    complement: string;
  };
};

type ResponseProps = {
  msg: string;
  severity: string;
};

export async function signup(params: SignUpProps): Promise<ResponseProps> {
  try {
    await API.post('signup', params);
    return responseMessage('Empresa cadastrada com sucesso', 'success');
  } catch (error) {
    return responseMessage('Erro ao cadastrar empresa', 'error');
  }
}
