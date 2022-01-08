export interface ResponseSignInProps {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export type SignInProps = {
  email?: string;
  password?: string;
};

export type ResetPasswordProps = {
  email: string;
};

export type UserProps = {
  email: string;
};
