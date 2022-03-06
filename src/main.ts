import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
// import "../node_modules/bulma/css/bulma.css"
import './assets/normalize.css'
import './assets/main.css'
import MoviePage from './pages/movie.vue'
import Home from './pages/home.vue'
import Header from './components/molecule/header.vue'
import Footer from './components/molecule/footer.vue'
import Genre from './pages/genre.vue'
import Cast from './pages/cast.vue'

const routes = [
	{ path: '/', components: { default: Home, header: Header, footer: Footer } },
	{ name: 'movie', path: '/movie/:movieId', components: { default: MoviePage, header: Header, footer: Footer }, props: { default: true, header: false, footer: false } },
	{ name: 'genre', path: '/:genre/:pageNumber', components: { default: Genre, header: Header, footer: Footer }, props: { default: true, header: false, footer: false } },
	{ name: 'cast', path: '/cast/:castPersonId', components: { default: Cast, header: Header, footer: Footer }, props: { default: true, header: false, footer: false } }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

createApp(App).use(router).mount('#app')
