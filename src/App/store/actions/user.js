import types from './types';

export const login = (username) => ({
  type: types.LOGIN,
  username
});

export const logout = () => ({
  type: types.LOGOUT
});