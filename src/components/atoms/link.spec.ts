import { mount } from '@vue/test-utils'
import Link from './link.vue';

const props = {
  class: 'test-link',
  href: 'https://www.google.com',
  target: '_blank',
  title: 'test link'
	}

const wrapper = mount(Link, {props});

describe('deve ser um componente link', () => {
	it('deve renderizar tag <a>', () => {
		expect(wrapper.html()).toBeDefined
		expect(wrapper.html()).toMatchSnapshot()
		expect(wrapper.html()).toBe(`<a class="test-link" href="https://www.google.com" target="_blank">test link</a>`)
	})
})
