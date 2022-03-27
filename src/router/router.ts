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
		name: 'page 0 favorites',
		path: '/favorites',
		components: {
			default: () => import(/* webpackChunkName: "Genre" */ '../pages/favorites.vue'),
			header: () => import(/* webpackChunkName: "Header" */ '../components/molecule/header.vue'),
			footer: () => import(/* webpackChunkName: "Footer" */ '../components/molecule/footer.vue')
		},
		redirect: '/favorites/0',
	},
	{
		name: 'favorites',
		path: '/favorites/:pageNumber',
		components: {
			default: () => import(/* webpackChunkName: "Genre" */ '../pages/favorites.vue'),
			header: () => import(/* webpackChunkName: "Header" */ '../components/molecule/header.vue'),
			footer: () => import(/* webpackChunkName: "Footer" */ '../components/molecule/footer.vue')
		}, props: { default: true, header: false, footer: false }
	},
	{
		name: 'page 0 to see',
		path: '/to-see',
		components: {
			default: () => import(/* webpackChunkName: "Genre" */ '../pages/to-see.vue'),
			header: () => import(/* webpackChunkName: "Header" */ '../components/molecule/header.vue'),
			footer: () => import(/* webpackChunkName: "Footer" */ '../components/molecule/footer.vue')
		},
		redirect: '/to-see/0',
	},
	{
		name: 'to-see',
		path: '/to-see/:pageNumber',
		components: {
			default: () => import(/* webpackChunkName: "Genre" */ '../pages/to-see.vue'),
			header: () => import(/* webpackChunkName: "Header" */ '../components/molecule/header.vue'),
			footer: () => import(/* webpackChunkName: "Footer" */ '../components/molecule/footer.vue')
		}, props: { default: true, header: false, footer: false }
	},
	{
		path: '/:notFound(.*)',
		redirect: '/'
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return {left: 0, top: 0}
	},
})

export default router