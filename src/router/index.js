import VueRouter from 'vue-router'
import layout from '../pages/layout'
import StartPage from '../pages/start-page'

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name:'start-page',
			component: StartPage
		},
		{
			path: '/home',
			name:'home',
			component: layout,
			// children:
			// [
			// 	{
			// 		path: '/serial',
			// 		name:'serial-page',
			// 		component: SerialPage
			// 	},

			// ]
		},

	]
})