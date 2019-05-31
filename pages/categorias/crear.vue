<template>
  <form name="from categorias" @submit.prevent="guardarcategorias">
    <h1>Nueva Categoria</h1>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12" md="4" offset-md="4">
          
            <div class="form-group">
              <label for="Nombre">Nombre de Categoria</label>
              <input
                type="text"
                required 
                v-model="form.nombre"
                class="form-control"
                name="Nombre categoria"

                placeholder="Ingrese categoria"
              >
             
            </div>
            <div class="row" id="galeria"></div>
        
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col lg="6" md="6" offset-md="3">
          
          <b-button variant="primary" type="submit" :disabled="t">
            <b-spinner  label="Loading... " v-if="guardando" ></b-spinner>Guardar</b-button>
          <b-button variant="primary" href="/categorias">Volver</b-button>
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
            },
            guardando: false,
            t: false
        }
    },
    
    methods: {
        guardarcategorias(){
          
          this.guardando= true
          this.t = true
            db.collection("categorias").add(this.form).then(res => {
                this.$router.push({
                    path: "/categorias"
                })
            })
        }
    }
}
</script>

