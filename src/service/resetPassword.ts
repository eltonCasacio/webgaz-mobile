import API from '../service/api';
import {responseMessage} from '../utils';

export type ResetPasswordProps = {
  email: string;
};

type ResponseProps = {
  msg: string;
  severity: string;
};

export async function resetPassword(
  params: ResetPasswordProps,
): Promise<ResponseProps> {
  try {
    await API.patch('reset-password', params);
    return responseMessage('Senha criada, verificar email', 'success');
  } catch (error) {
    return responseMessage('Erro ao criar senha', 'error');
  }
}
