import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router'
import { isValidRouterPath } from '../modules/router-helper.ts'
import genres from '../assets/genres'
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
		}, props: { default: true, header: false, footer: false }
	},
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
		name: 'search',
		path: '/search/:query/:pageNumber',
		components: {
			default: () => import(/* webpackChunkName: "search" */ '../pages/search.vue'),
			header: () => import(/* webpackChunkName: "Header" */ '../components/molecule/header.vue'),
			footer: () => import(/* webpackChunkName: "Footer" */ '../components/molecule/footer.vue')
		},props: { default: true, header: false, footer: false }
	},
	{
		name: '404',
		path: '/404',
		components: {
			default: () => import(/* webpackChunkName: "MoviePage" */ '../pages/404.vue'),
			header: () => import(/* webpackChunkName: "Header" */ '../components/molecule/header.vue'),
			footer: () => import(/* webpackChunkName: "Footer" */ '../components/molecule/footer.vue')
		}
	},
	{
		name: 'not found',
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


router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) => {
	const isValidPath = isValidRouterPath(to.path)
	let isValidSlug = false
	isValidSlug = router.options.routes.some(route => {
		if (isValidPath) {
			return isValidPath === String(route.name)
		}
	})
	if (!isValidSlug) {
		isValidSlug = genres.some(genre => {
			if (isValidPath) {
				return isValidPath === String(genre.id)
			}
		})
	}
	if (isValidSlug) {
		return next()
	}
	if (isValidPath === '/') {
		return next()
	}
	if (isValidSlug === false) {
		return next('/404')
	}
})

export default router