<template>
  <div class="mb-4">
    <form>
      <div class="row">
        <div class="form-group col">
          <label for="nombreBanco">nombre</label>
          <input v-model="banco.nombre" type="text" class="form-control" id="nombreBanco" />
        </div>
        <div class="form-group col">
          <label for="codigo">codigo</label>
          <input v-model="banco.codigo" type="text" class="form-control" id="codigo" />
        </div>
      </div>
      <div class="row">
        <div class="form-group col">
          <label>Pais</label>
          <select class="custom-select">
            <option selected>Selecione un Pais</option>
            <option value="1">Venezuela</option>
            <option value="2">Colombia</option>
            <option value="3">Rusia</option>
          </select>
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
  mounted: function() {
    console.log(this.cliente);
  },
  props: {
    banco: Object
  },
  data() {
    return {};
  },
  methods: {}
};
</script>