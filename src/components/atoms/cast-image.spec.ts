import { mount } from '@vue/test-utils'
import CastImage from './cast-image.vue'
import Img from './img.vue'

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

const wrapper = mount(CastImage, {props})

describe('contem o component cast-img', () => {
	it('deve conter uma div', () => {
		expect(wrapper).toBeTruthy()
		expect(wrapper.html()).toBeDefined
		expect(wrapper.html()).toBe(`<div class="cast-img" data-v-d577916c=""><svg class="loading" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" data-v-3285f296="">
    <g fill="none" fill-rule="evenodd" data-v-3285f296="">
      <g transform="translate(1 1)" stroke-width="2" data-v-3285f296="">
        <circle stroke-opacity=".5" cx="18" cy="18" r="18" data-v-3285f296=""></circle>
        <path d="M36 18c0-9.94-8.06-18-18-18" data-v-3285f296="">
          <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite" data-v-3285f296=""></animateTransform>
        </path>
      </g>
    </g>
  </svg><img loading="lazy" src="https://image.tmdb.org/t/p/original/kU3B75TyRiCgE270EyZnHjfivoq.jpg" alt="Brad Pitt" class="img-cover" data-v-3285f296=""></div>`)
		expect(wrapper.html()).toMatchSnapshot()
	})
	it('deve ter componente filho Img', () => {
		const link = wrapper.findComponent(Img)
		expect(link.exists()).toBe(true)
	})
})