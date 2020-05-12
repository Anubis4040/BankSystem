<template>
  <div>
    <table class="table w-75 m-auto">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Codigo</th>
          <th scope="col">Pais</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(banco,index) of bancos" :key="index">
          <th>{{banco.id}}</th>
          <td>{{banco.nombre}}</td>
          <td>{{banco.codigo}}</td>
          <td>{{banco.pais}}</td>
          <td>
            <button class="btn btn-sm btn-primary">
              <router-link class="text-white" v-bind:to="'bancos/'+banco.id" >Detalles</router-link> 
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
  name: "Listar",
  mounted: function (){
    
  },
  components: {},
  data() {
    return {
      bancos: [
        {id: "1",nombre: "Banco Venezuela", codigo: "0102", pais:"Venezuela"},
        {id: "2",nombre: "Banesco", codigo: "0134", pais:"Venezuela"},
        {id: "3",nombre: "Bank of America", codigo: "1589", pais:"Estado Unidos"}
      ]
    };
  }
};
</script>

<style scoped>
  
</style>