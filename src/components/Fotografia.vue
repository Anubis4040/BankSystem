<template>
  <div>
    <h1>Foto desde componente: {{ $route.params.id }}</h1>
    <button @click="prueba">Usame</button>
  </div>
</template>

<script>
export default {
  name: "Foto",
  data: function() {
    return {
      param: this.$route.params.id
    };
  },
  methods: {
    prueba() {
      console.log(this.$route.params.id);
    }
  }
};
</script>