<template>
  <div class="mb-4">
    <div class="card w-75 m-auto">
      <div class="card-header font-weight-bold bg-success text-white">{{header}}</div>
      <div class="card-body">
        <form>
          <div class="row">
            <div class="form-group col">
              <label for="cedula">Cedula</label>
              <input v-model="cliente.cedula" type="text" class="form-control" id="cedula" />
            </div>
            <div class="form-group col">
              <label for="telefono">Telefono</label>
              <input v-model="cliente.telefono" type="text" class="form-control" id="telefono" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col">
              <label for="nombre">Nombre</label>
              <input v-model="cliente.nombre" type="text" class="form-control" id="nombre" />
            </div>
            <div class="form-group col">
              <label for="apellido">Apellido</label>
              <input v-model="cliente.apellido" type="text" class="form-control" id="apellido" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col">
              <label for="inputEmail4">Email</label>
              <input v-model="cliente.email" type="email" class="form-control" id="inputEmail4" />
            </div>
          </div>
          <div class="row justify-content-center">
            <input @click.prevent="guardar" type="submit" class="w-75 btn btn-success" value="Registrar" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormularioCientes",
  props: {
    header: String
  },
  data() {
    return {
      cliente: {
        cedula: "",
        telefono: "",
        nombre: "",
        apellido: "",
        email: ""
      }
    };
  },
  methods: {
    guardar: function (){
    this.$axios
    .post('http://banksystemvue.com/api/clients',this.clientes)
    .then(response => console.log(response))
    .catch( error => console.log(error) );
    }
  }
};
</script>

