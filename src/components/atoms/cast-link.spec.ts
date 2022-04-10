import { mount } from '@vue/test-utils'
import CastLinks from './cast-links.vue'
import Link from './link.vue'

const props = {
	castDetails: {
		birthday: "1963-12-18",
		known_for_department: "Acting",
		deathday: null,
		id: 287,
		name: "Brad Pitt",
		also_known_as: [
			"Buratto Pitto",
		],
		gender: 2,
		biography: `William Bradley \"Brad\" Pitt (born December 18, 1963) is an American actor and film producer. Pitt has received two Academy Award nominations and four Golden Globe Award nominations, winning one. He has been described as one of the world's most attractive men, a label for which he has received substantial media attention. Pitt began his acting career with television guest appearances, including a role on the CBS prime-time soap opera Dallas in 1987. He later gained recognition as the cowboy hitchhiker who seduces Geena Davis's character in the 1991 road movie Thelma & Louise. Pitt's first leading roles in big-budget productions came with A River Runs Through It (1992) and Interview with the Vampire (1994)...`,
		popularity: 10.647,
		place_of_birth: "Shawnee, Oklahoma, USA",
		profile_path: "/kU3B75TyRiCgE270EyZnHjfivoq.jpg",
		adult: false,
		imdb_id: "nm0000093",
		homepage: null,
	}
}

const wrapper = mount(CastLinks, {props})

describe('contem o component cast-img', () => {
	it('deve conter uma div', () => {
		expect(wrapper).toBeTruthy()
		expect(wrapper.html()).toBeDefined
		expect(wrapper.html()).toBe(`<div class="cast-links"><a class="average-rgb--border" href="https://www.imdb.com/name/nm0000093" target="_blank">Ver no IMDB</a></div>`)
		expect(wrapper.html()).toMatchSnapshot()
	})
	it('deve ter componente filho Link', () => {
		const link = wrapper.findComponent(Link)
		expect(link.exists()).toBe(true)
	})
})