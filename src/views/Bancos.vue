<template>
  <div class="home">
    <div class="nav-v">
      <router-link to="/bancos/listar">Listar</router-link> |
      <router-link to="/bancos/registro">Registro</router-link> 
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped>

</style>
