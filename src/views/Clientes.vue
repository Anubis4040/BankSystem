<template>
  <div class="home">
    <div class="nav-v">
      <router-link to="/clientes/listar">Listar</router-link> |
      <router-link to="/clientes/registro">Registro</router-link> 
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Clientes',
  components: {
  }
}
</script>

<style scoped>

</style>
