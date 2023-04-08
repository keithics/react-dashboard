import { ForgotPasswordInterface, LoginInterface, RegisterInterface, UserInterface } from 'pages/user/user.interface';
import { postFetch, postSilentFetch } from 'request/request';

export const register = async (values: RegisterInterface) => {
  return postFetch(`/register/`, values, 'Please check your email for confirmation');
};

export const login = async (values: LoginInterface): Promise<UserInterface> => {
  return postSilentFetch(`/login`, values);
};

export const forgot = async (values: ForgotPasswordInterface) => {
  return postSilentFetch(`/forgot/`, values);
};
