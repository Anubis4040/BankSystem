<template>
  <div id="app">
    <div class="nav-v" id="nav">
      <router-link to="/clientes/listar">Clientes</router-link> |
      <router-link to="/bancos/listar">Bancos</router-link> |
      <router-link to="/cuentas/registro">Cuentas</router-link>
    </div>
    <img alt="Vue logo" class="image-logo" src="./assets/business.svg">
    <router-view/>
  </div>
</template>

<style>

.image-logo{
  width: 30%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-v {
  padding: 30px;
}

.nav-v a {
  font-weight: bold;
  color: #2c3e50;
}

.nav-v a.router-link-exact-active {
  color: #42b983;
}

</style>
