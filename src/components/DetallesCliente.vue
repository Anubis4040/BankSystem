<template>
  <div class="mb-4">
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
        <input type="submit" class="w-25 btn btn-success" value="Actualizar" />
        <input type="submit" class="w-25 btn btn-danger" value="Borrar" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "DetallesCliente",
  mounted: function(){
    console.log(this.cliente)
  },
  props: {
    cliente: Object,
  },
  data() {
    return {};
  },
  methods: {

  }
};
</script>