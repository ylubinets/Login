import { SET_EMAIL, SET_PASSWORD, LOGIN_FAILED, LOGIN, LOGOUT, HIDE_ALERT } from "./types";
import axios from 'axios';

const API = 'https://site.ualegion.com';

export const login = ({email, password}) => (dispatch) => {
  axios
    .post(`${API}/api/v1/security/login`, { email, password })
    .then(response => {
      dispatch({ type: LOGIN }); // Update authentication status
      localStorage.setItem('token', response.data.token) // Save the JWT token
    })
    .catch(() => {
      dispatch({type: LOGIN_FAILED, payload: 'Wrong email or password'});
    });
};

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: LOGOUT
  }
}

export const hideAlert = () => (dispatch) => {
  dispatch({type: HIDE_ALERT});
}

export const setEmail = data => ({ type: SET_EMAIL, payload: data });
export const setPassword = data => ({ type: SET_PASSWORD, payload: data });
