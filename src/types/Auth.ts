export type CompanyProps = {
  name: string;
  cnpj: string;
  email: string;
  password: string;
  passwordConfirmation: string;

  cep: string;
  district: string;
  city: string;
  state: string;
  street: string;
  fuelStationNumber: string;
  complement: string;
  telephone: string;
  flag: string;
  networkName?: string;
  isNetwork: 'NÃO' | 'SIM';
};

export type ResponseSignup = {
  message: string;
  url: string;
};

export type SignInProps = {
  email?: string;
  password?: string;
};

export type ResponseSignIn = {
  token: string;
  status: string;
  error: string;
} & CompanyProps;

export type ResetPasswordProps = {
  email: string;
};

export type User = {
  status: string;
  id: string;
  name: string;
};
