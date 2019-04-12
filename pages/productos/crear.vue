<template>
  <form name="from producto" @submit.prevent="guardarproducto">
    <h1>Nuevo Producto</h1>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12" md="4" offset-md="4">
          
            <div class="form-group">
              <label for="url">Imagen</label>
              <input type="text"  class="form-control" name="url" placeholder="Ingrese url">
              <label for="Nombre">Nombre del producto</label>
              <input
                type="text"
                required 
                v-model="form.nombre"
                class="form-control"
                name="Nombre del procucto"

                placeholder="Ingrese producto"
              >
              <label for="precio">Precio</label>
              <input
                type="number"
                required
                v-model="form.precio"
                class="form-control"
                name="Precio"
                placeholder="Ingrese precio"
              >
              <label for="cantidad">Cantidad</label>
              <input
                type="number"
                required
                v-model="form.cantidad"
                
                class="form-control"
                name="Cantidad"
                placeholder="Ingrese cantidad"
              >
            </div>
            <div class="row" id="galeria"></div>
        
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col lg="6" md="6" offset-md="3">
          
          <b-button variant="primary" type="submit" :disabled="t">
            <b-spinner  label="Loading... " v-if="guardando" ></b-spinner>Guardar</b-button>
          <b-button variant="primary" href="/productos">Volver</b-button>
        </b-col>
      </b-row>
    </b-container>
  </form>
</template>

<script>
import { db } from '../../services/firebase'

export default {
    data(){
        return {
            form:{
            nombre:'',
            cantidad: '',
            precio: ''
            },
            guardando: false,
            t: false
        }
    },
    
    methods: {
        guardarproducto(){
          
          this.guardando= true
          this.t = true
            db.collection("productos").add(this.form).then(res => {
                this.$router.push({
                    path: "/productos"
                })
            })
        }
    }
}
</script>

