import { mount } from '@vue/test-utils'
import Rating from './rating.vue'

const props = {
	movie: {
    id: 30,
    original_title: 'filme test',
    poster_path: null,
    release_date: '12/04/2020',
    vote_average: 8,
	}
}

const wrapper = mount(Rating, { props })

describe('deve ser um componente pontos', () => {
	it('deve renderizar uma div', () => {
		expect(wrapper.html()).toBeDefined
		expect(wrapper.html()).toMatchSnapshot()
		expect(wrapper.html()).toContain('<div class="rating average-rgb--bg"')
		expect(wrapper.html()).toContain('<div class="rate"')
		expect(wrapper.html()).toContain('8</p>')
	})
})