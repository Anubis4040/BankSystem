<template>
  <div>
    <table class="table table-striped w-75 m-auto">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Cedula</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Telefono</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of clientes" :key="item.id">
          <th scope="row">{{item.id}}</th>
          <td>{{item.ci}}</td>
          <td>{{item.nombre}}</td>
          <td>{{item.email}}</td>
          <td>{{item.telefono}}</td>
          <td>
            <button class="btn btn-sm btn-primary">
              <router-link class="text-white" v-bind:to="'detalles/'+item.id">Detalles</router-link>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
/* import CardVue from '@/components/CardVueComponent.vue' */ //Componente eliminado, ejemplo de import

export default {
  name: "ListarClientes",
  mounted: function() {
    this.$axios
      .get("http://banksystemvue.com/api/clients",{})
      .then(response => {
          response.data.forEach(element => {
            this.clientes.push(element);
          });
         })
      .catch(error => console.log(error));

  },
  components: {},
  data() {
    return {
      clientes: [
        {
          id: "1",
          ci: "25623445",
          nombre: "jose",
          email: "jose@gmail.com",
          telefono: "04248854215"
        },
        {
          id: "2",
          ci: "26623745",
          nombre: "Pedro",
          email: "pedro@gmail.com",
          telefono: "04249661385"
        },
        {
          id: "3",
          ci: "25925445",
          nombre: "Maria",
          email: "Maria@gmail.com",
          telefono: "04242297648"
        }
      ]
    };
  },
  methods: {
    accionar: function() {
      console.log(this.items[0]);
    }
  }
};
</script>

<style scoped>
.white {
  color: white;
}
</style>