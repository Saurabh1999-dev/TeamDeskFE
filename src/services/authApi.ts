import api from './api';

export const login = (email: string, password: string) => {
  return api.post('/auth/login', { email, password });
};

export const register = (user: {
  fullName: string;
  email: string;
  password: string;
  role: number,
}) => {
  return api.post('/auth/register', user);
};
