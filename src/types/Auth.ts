export type fuelStationProps = {
  id: number;
  name: string;
  cnpj: string;
  email: string;
  telephone: string;
  city: string;
  street: string;
  state: string;
  cep: string;
  complement: string;
  district: string;
  fuelStationNumber: string;
  flag: string;
  isNetwork: 'NÃO' | 'SIM';
  networkName?: string;
  status: 'PENDENTE' | 'ENTREGUE' | 'CANCELADO';
  password: string;
};

export type ResponseSignIn = {
  token: string;
  fuelStation: fuelStationProps;
};

export type ResponseSignup = {
  message: string;
  url: string;
};

export type SignInProps = {
  email?: string;
  password?: string;
};

export type ResetPasswordProps = {
  email: string;
};

export type User = {
  status: string;
  id: number;
  name: string;
};
