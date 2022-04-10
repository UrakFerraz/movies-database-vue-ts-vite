import { mount } from '@vue/test-utils'
import Img from './img.vue'


const props = {
	src: '../../assets/bg.webp',
	class: 'img-test-class',
	alt: 'test-alt-img'
}

const wrapper = mount(Img, { props })

describe('deve ser o componente imagem', () => {
	it('deve ser um componente img', () => {
		expect(wrapper).toBeTruthy()
		expect(wrapper.html()).toBeDefined
		expect(wrapper.html()).toBe(`<svg class="loading" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" data-v-3285f296="">
  <g fill="none" fill-rule="evenodd" data-v-3285f296="">
    <g transform="translate(1 1)" stroke-width="2" data-v-3285f296="">
      <circle stroke-opacity=".5" cx="18" cy="18" r="18" data-v-3285f296=""></circle>
      <path d="M36 18c0-9.94-8.06-18-18-18" data-v-3285f296="">
        <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite" data-v-3285f296=""></animateTransform>
      </path>
    </g>
  </g>
</svg>
<img loading="lazy" src="../../assets/bg.webp" alt="test-alt-img" class="img-test-class" data-v-3285f296="">`)
		expect(wrapper.html()).toContain('<img')
		expect(wrapper.html()).toMatchSnapshot()
	})
	it('deve conter loading svg', () => {
		expect(wrapper.html()).toContain(`<svg class="loading" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" data-v-3285f296="">
  <g fill="none" fill-rule="evenodd" data-v-3285f296="">
    <g transform="translate(1 1)" stroke-width="2" data-v-3285f296="">
      <circle stroke-opacity=".5" cx="18" cy="18" r="18" data-v-3285f296=""></circle>
      <path d="M36 18c0-9.94-8.06-18-18-18" data-v-3285f296="">
        <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite" data-v-3285f296=""></animateTransform>
      </path>
    </g>
  </g>
</svg>`)
	})
})