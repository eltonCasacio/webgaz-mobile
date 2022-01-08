//POST
export type CompanyType = {
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
