import { RouteComponent } from 'vue-router'

export default {
	name: 'auth',
	component: (): Promise<RouteComponent> => import('@/views/auth/AuthPage.vue'),
		children: [
		{
			path: '',
			name: 'log-in',
			component: (): Promise<RouteComponent> => import('@/components/auth/LogInFormComponent.vue')
		},
		{
			path: 'sign-up',
			name: 'sign-up',
			component: (): Promise<RouteComponent> => import('@/components/auth/SignUpFormComponent.vue')
		}
	]
}