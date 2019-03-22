<template>
  <div>
    <h1>hola {{ msg }}</h1>
    <!--//todo lo que se escibe aquie es html-->
    <input type="text" v-model="msg">
    <button @click="guardar">Guardar</button>
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
export default {
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