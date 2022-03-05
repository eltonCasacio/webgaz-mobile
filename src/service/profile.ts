export type ProfileProps = {
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

export async function profile(params: ProfileProps): Promise<void> {
  try {
    // await API.post('profile', params);
  } catch (error) {}
}
