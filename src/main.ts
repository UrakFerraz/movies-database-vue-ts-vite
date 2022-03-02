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

const routes = [
	{ path: '/', components: { default: Home, header: Header, footer: Footer } },
	{ name: 'movie', path: '/movie/:movieId', components: { default: MoviePage, header: Header, footer: Footer }, props: { default: true, header: false, footer: false } },
	{ path: '/:genre/:pageNumber', component: Genre, props: true }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

createApp(App).use(router).mount('#app')
