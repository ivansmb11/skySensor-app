import { Commit } from 'vuex';
import axios from 'axios';
import qs from 'qs';
import authApi from '@/api/authApi';
import LogInRequest from '../../models/auth/LogInRequest';
import SignUpRequest from '@/models/auth/SignUpRequest';

const ERROR_MSG = 'An error occurred. Please try again later.';

export const loginUser = async( { commit }: { commit: Commit }, logInRequest: LogInRequest ) => {
  try {
    const { data } = await authApi.post( '/login', qs.stringify(logInRequest) );
    const { user: userData, access_token: accessToken, refresh_token: refreshToken } = data;
    commit( 'loginUser', { user: userData, accessToken, refreshToken } );
    return { ok: true, message: 'Login successful' };
  } catch ( error ) {
    if ( axios.isAxiosError( error ) ) {
      const { message } = error.response?.data as any || ERROR_MSG;
      return { ok: false, message: message+' &#128531;'  };
    } else {
      return { ok: false, message: ERROR_MSG };
    }
  }
}

export const createUser = async({ commit }: { commit: Commit }, signUpRequest: SignUpRequest ) => {
  try {
    const { data, status } = await authApi.post( '/register', signUpRequest );
    if (status !== 200) return { ok: false, message: data.message };
    return await loginUser( { commit }, { username: signUpRequest.username, password: signUpRequest.password } );
  } catch ( error ) {
    if ( axios.isAxiosError( error ) ) {
      const { message } = error.response?.data as any || ERROR_MSG;
      return { ok: false, message };
    } else {
      return { ok: false, msg: ERROR_MSG };
    } 
  }
}

export const checkAuth = async ({ commit }: { commit: Commit }) => {
  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');
  if ( !accessToken || !refreshToken ) {
    commit('logout');
    return { ok: false, message: 'Unexisting token' };
  }
  try {
    const { data } = await authApi.get( '/token/refresh', {
      headers: {
        Authorization: `Bearer ${ refreshToken }`
      }
    });
    const { user, access_token: accessToken } = data;
    commit( 'loginUser', { user, accessToken, refreshToken } );
    return { ok: true };
  } catch ( error ) {
    commit('logout');
    if ( axios.isAxiosError( error ) ) {
      const { message } = error.response?.data as any || ERROR_MSG;
      return { ok: false, message };
    } else {
      return { ok: false, message: ERROR_MSG };
    }
  }  
}
