<template>
  <div class="mb-4">
    <div class="card w-75 m-auto">
      <div class="card-header font-weight-bold bg-success text-white">{{header}}</div>
      <div class="card-body">
        <form>
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
          <div class="row">
            <div class="form-group col">
              <label>Banco</label>
              <select class="custom-select">
                <option selected>Selecione un Banco</option>
                <option value="1">Banco Venezuela</option>
                <option value="2">Banesco</option>
                <option value="3">Bank of America</option>
              </select>
            </div>
          </div>
          <div class="row justify-content-center">
            <input type="submit" class="w-75 btn btn-success" value="Crear" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardVue",
  props: {
    header: String
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

