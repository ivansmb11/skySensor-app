import { RouteLocationNormalized } from 'vue-router';
import store from '@/store';

const isAuthGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: ( arg0?: { name: string } | undefined ) => void
) => {
  const { ok } = await store.dispatch('auth/checkAuth');
  if( ok ) next()
  else next({ name: 'log-in' });
}

export default isAuthGuard;