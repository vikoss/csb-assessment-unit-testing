import { ref } from 'vue'

const LOCALSTORAGE_KEY = 'csb-username'

export function useUser() {
  const username = ref(null)

  const loadUser = () => {
    username.value = localStorage.getItem(LOCALSTORAGE_KEY)
  }

  const updateUser = (user) => {
    localStorage.setItem(LOCALSTORAGE_KEY, user)
  }

  return {
    updateUser,
    loadUser,
    username,
  }
}