import { mount } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'
import updateUserView from '@/views/Users/update.vue'

describe('UpdateUserView', () => {

  const wrapper = mount(updateUserView)

  const updateUser = vi.spyOn(wrapper.vm, 'updateUser')

  test('Test has a input for update', () => {
    expect(wrapper.find('input').exists()).toBe(true)
  })

  test('Test has a button for update', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })

  test('Test button update clicked', async () => {
    await wrapper.get('button').trigger('click')
    expect(updateUser).toHaveBeenCalled()
    expect(updateUser).toHaveBeenCalledTimes(1)
  })
})