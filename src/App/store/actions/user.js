import types from './types';

export const login = (username) => ({
  type: types.LOGIN,
  username
});

export const logout = () => ({
  type: types.LOGOUT
});

export const addSongToHistory = (song) => ({
  type: types.ADD_TO_HISTORY,
  song
});