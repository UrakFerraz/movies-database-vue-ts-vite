import { mount } from '@vue/test-utils'
import SearchButton from './search-button.vue'

const wrapper = mount(SearchButton)

describe('deve ser o componente button', () => {
	it('deve ser um componente button', () => {
		expect(wrapper).toBeTruthy()
		expect(wrapper.html()).toBeDefined
		const button = wrapper.find('button')
		expect(button.exists()).toBe(true)
		const svg = wrapper.find('svg')
		expect(svg.exists()).toBe(true)
		expect(wrapper.html()).toMatchSnapshot()
	})
})