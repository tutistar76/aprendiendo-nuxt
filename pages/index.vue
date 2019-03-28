<template>
  <div>
    <!--<navbar></navbar> aqui se llama los componentes de navbar.vue-->
    <h1>hola {{ msg }}</h1>
    <!--//todo lo que se escibe aquie es html-->
    <input type="text" v-model="msg">
    <button @click="guardar"
    class="btn btn-primary">Guardar</button>
    <b-button variant="primary">Guardar</b-button><!---para crear un guardar-->
    <table>
      <tr>
        <th>Nombre</th>
      </tr>
      <tr v-for="(item, index) in municipio" :key="index">
        <!--para recorrer arreglos-->
        <td>{{item}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import navbar from '../components/navbar'//aqui se importa un documento
//import contacto from './contacto'
export default {
  components: {navbar}, //aqui importamos componentes
  data() {
    return {
      msg: "tutistar",
      municipio: ["Cali", "popayan", "Mocoa"]
    };
  },
  methods: {
    guardar() {
      this.municipio.push(this.msg);
      this.msg = "";
    }
  }
};
</script>
<style>
</style>