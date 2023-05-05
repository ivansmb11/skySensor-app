import { useStore } from 'vuex';
import authApi from '../api/authApi';
export const refreshToken = async ( refreshToken: string ) => {
  const store = useStore();
  try {
    const { data } = await authApi.get( '/token/refresh', {
      headers: {
        Authorization: `Bearer ${ refreshToken }`
      }
    });
    const { access_token: accessToken } = data;
    localStorage.setItem( 'access_token', accessToken );
    return accessToken;
  } catch (error) {
    store.commit( 'auth/logout' );
  }
}
