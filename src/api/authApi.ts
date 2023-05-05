import axios from 'axios';
import { useStore } from 'vuex';

const authApi = axios.create({
  baseURL: process.env.VUE_APP_API_URI + '/auth',
});

authApi.interceptors.response.use(
  ( response: any ) => {
    return response;
}, async( error: any ) => {
  const store = useStore();
  const token = localStorage.getItem('refresh_token');
  if ( error.response.status === 403 && token ) {
    store.commit( 'auth/logout' );
  }
  return Promise.reject(error);
});

export default authApi;