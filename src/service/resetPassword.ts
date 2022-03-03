import API from '../service/api';

export type ResetPasswordProps = {
  email: string;
};

type ResponseProps = {
  msg: string;
  severity: string;
};

export async function resetPassword(params: ResetPasswordProps): Promise<void> {
  try {
    await API.patch('reset-password', params);
  } catch (error) {}
}
