<template>
  <div>
    <!-- Detalles del Banco -->
    <div class="mb-4">
      <div class="card w-75 m-auto">
        <div class="card-header font-weight-bold bg-success text-white">{{header}}</div>
        <div class="card-body">
          <DetallesBanco v-bind:cuenta="cuenta" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DetallesBanco from "@/components/DetallesBanco.vue";

export default {
  name: "Detalles",
  components: {
    DetallesBanco
  },
  data: function() {
    return {
      header: "Detalles del Banco",
      banco: {
        id: "1",
        nombre: "Banco Venezuela",
        codigo: "0102",
        pais:"Venezuela"},
      
    };
  },
  methods: {

  }
};
</script>

<style scoped>

</style>