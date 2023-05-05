
export default {
	name: 'auth',
	component: () => import('@/views/auth/AuthPage.vue'),
		children: [
		{
			path: '',
			name: 'log-in',
			component: () => import('@/components/auth/LogInFormComponent.vue')
		},
		{
			path: 'sign-up',
			name: 'sign-up',
			component: () => import('@/components/auth/SignUpFormComponent.vue')
		}
	]
}