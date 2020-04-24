import axios from 'redaxios';
import { ADD_TOKEN, REMOVE_TOKEN } from './actions.types';

export const signHandler = (data, isLogin) => async (dispatch) => {
  try {
    const url = isLogin
      ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDyPVaUxC29xMukG6bt2RJZC71mkReIQdY'
      : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDyPVaUxC29xMukG6bt2RJZC71mkReIQdY';
    const resp = await axios.post(url, data);
    const token = JSON.parse(resp.data).idToken;
    localStorage.setItem('token', token);
    dispatch(addToken(token));
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const removeToken = () => {
  localStorage.removeItem('token');
  return { type: REMOVE_TOKEN };
};

export const addToken = (token) => ({
  type: ADD_TOKEN,
  token,
});
