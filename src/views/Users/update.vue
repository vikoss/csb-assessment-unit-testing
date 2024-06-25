<template>
  <main>
    <section>
      <h1>Datos de tu usuario</h1>
      <h3>Nombre: {{ username }}</h3>
    </section>
    <section>
      <h1>Cambiar tu nombre de usuario</h1>
      <input type="text" name="username" id="username" v-model="username">
      <button @click="updateUser(username)">Guardar</button>
    </section>
  </main>
</template>

<script>
import { useUser } from '@/composables/useUser'

export default {
  setup() {
    const { updateUser, loadUser, username } = useUser()

    loadUser()

    return {
      updateUser,
      loadUser,
      username,
    }
  }
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
section {
  text-align: center;
  border: 2px solid burlywood;
  padding: 20px;
}
</style>