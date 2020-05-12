<template>
  <div>
    <!-- Detalles del Cliente -->
    <div class="mb-4">
      <div class="card w-75 m-auto">
        <div class="card-header font-weight-bold bg-success text-white">{{header}}</div>
        <div class="card-body">
          <DetallesCliente v-bind:cliente="cliente" />
        </div>
      </div>
    </div>
    <!-- Cuentas del Cliente -->
    <div class="w-75 m-auto">
      <h2>Cuentas del Cliente</h2>
      <button class="btn btn-primary my-3">
        <router-link class="text-white" v-bind:to="'cuentas/registro'">Nueva Cuenta</router-link> 
      </button>
      <table class="table ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Numero de cuenta</th>
            <th scope="col">Banco</th>
            <th scope="col">Pais</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cuenta,index) of cuentas" :key="index">
            <td>{{cuenta.id}}</td>
            <td>{{cuenta.cuentaNumero}}</td>
            <td>{{cuenta.banco}}</td>
            <td>{{cuenta.pais}}</td>
            <td>
              <button class="btn btn-sm btn-danger">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DetallesCliente from "@/components/DetallesCliente.vue";

export default {
  name: "Detalles",
  components: {
    DetallesCliente
  },
  data: function() {
    return {
      header: "Detalles del Cliente",
      cliente: {
        id: "1",
        cedula: "25623445",
        nombre: "juan",
        apellido: "juan",
        email: "jose@jose.com",
        telefono: "04248854215"
      },
      cuentas: [
        {
          id: "1",
          cuentaNumero: "01020673190000196956",
          banco: "Banco Venezuela",
          pais: "Venezuela"
        },
      ]
    };
  },
  methods: {

  }
};
</script>

<style scoped>
</style>