<template>
  <div>
    <table class="table">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Idade</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="usuario in this.usuarios">
      <th>{{ usuario.nome }}</th>
      <td>{{ usuario.idade }}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  beforeCreated: function () {},
  created: function () {
    this.getAllUsers()
  },
  mounted: function () {},
  computed: {
    ...mapState({
      usuarios: state => state.Usuario.usuarios
    })
  },
  methods: {
    ...mapActions(['getAllUsers'])
  }
}
</script>

<style>
</style>

