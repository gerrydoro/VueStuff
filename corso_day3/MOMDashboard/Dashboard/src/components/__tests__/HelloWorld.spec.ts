import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

describe('TheWelcome', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    console.log(
      wrapper.findAll('h1').find((x) => {
        return x.attributes().id == 'giulio'
      }),
    )
    console.log(
      wrapper.findAll('h1').find((x) => {
        return x.attributes().id == 'ciccio'
      })?.element.textContent,
    )

    expect(
      wrapper.findAll('h1').find((x) => {
        return x.attributes().id == 'ciccio'
      })?.element.textContent,
    ).toContain('giulio')
  })
})
