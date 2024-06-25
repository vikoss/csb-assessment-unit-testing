import { describe, test, expect, vi } from 'vitest'
import { useUser } from './useUser'


describe('useUserComposable', () => {
  const setItem = vi.spyOn(Storage.prototype, 'setItem')
  const getItem = vi.spyOn(Storage.prototype, 'getItem')

  const { loadUser, updateUser, username } = useUser()

  const usernameTest = 'Victor Israel'

  test('default value of username', () => {
    expect(username.value).toStrictEqual(null)
  })

  test('Test if update and load user is a function', () => {
    expect(typeof updateUser).toBe('function')
    expect(typeof loadUser).toBe('function')
  })

  test('Test update user', () => {
    updateUser(usernameTest)
    expect(setItem).toHaveBeenCalled()
  })

  test('Test load user', () => {
    loadUser()
    expect(username.value).toStrictEqual(usernameTest)
    expect(getItem).toHaveBeenCalled()
  })

})