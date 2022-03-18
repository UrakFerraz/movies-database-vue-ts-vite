import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		name: 'home',
		path: '/',
		components: {
			default: () => import(/* webpackChunkName: "Home" */ '../pages/home.vue'),
			header: () => import(/* webpackChunkName: "Header" */ '../components/molecule/header.vue'),
			footer: () => import(/* webpackChunkName: "Footer" */ '../components/molecule/footer.vue')
		}
	},
	{
		name: 'movie',
		path: '/movie/:movieId',
		components: {
			default: () => import(/* webpackChunkName: "MoviePage" */ '../pages/movie.vue'),
			header: () => import(/* webpackChunkName: "Header" */ '../components/molecule/header.vue'),
			footer: () => import(/* webpackChunkName: "Footer" */ '../components/molecule/footer.vue')
		},props: {default: true,header: false,footer: false } },
	{
		name: 'genre',
		path: '/:genre/:pageNumber',
		components: {
			default: () => import(/* webpackChunkName: "Genre" */ '../pages/genre.vue'),
			header: () => import(/* webpackChunkName: "Header" */ '../components/molecule/header.vue'),
			footer: () => import(/* webpackChunkName: "Footer" */ '../components/molecule/footer.vue')
		},props: { default: true, header: false, footer: false }
	},
	{
		name: 'cast',
		path: '/cast/:castPersonId',
		components: {
			default: () => import(/* webpackChunkName: "Cast" */ '../pages/cast.vue'),
			header: () => import(/* webpackChunkName: "Header" */ '../components/molecule/header.vue'),
			footer: () => import(/* webpackChunkName: "Footer" */ '../components/molecule/footer.vue')
		}, props: { default: true, header: false, footer: false }
	},
	{
		name: 'favorites',
		path: '/favorites',
		components: {
			default: () => import(/* webpackChunkName: "Genre" */ '../pages/favorites.vue'),
			header: () => import(/* webpackChunkName: "Header" */ '../components/molecule/header.vue'),
			footer: () => import(/* webpackChunkName: "Footer" */ '../components/molecule/footer.vue')
		}
	},
	{
		path: '/:notFound(.*)',
		redirect: '/'
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router