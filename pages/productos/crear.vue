<template>
  <form name="from producto" @submit.prevent="guardarproducto">
    <h1>Nuevo Producto</h1>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12" md="4" offset-md="4">
          
            <div class="form-group">
              
              <b-form-group label="imagen: " label-for="imagen">
                <b-form-file placeholder="cargar imagen" accept="imagen/*" v-model="imagenProduct" /> 
              </b-form-group>
              <label for="nombre">Nombre</label>
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
              <b-form-group label="Categoria" label-for="categoria">

              <b-form-select id="categoria" v-model="form.categoria" :options="categorias"></b-form-select>
              </b-form-group>
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
import { db, storage } from '../../services/firebase'
import { async } from 'q';

export default {
  asyncData(){// hace consultas antes del dibujo
    return db.collection('categorias').get().then(categoriasSnap => {
      let categorias = [];
      categoriasSnap.forEach(value => {
        categorias.push(value.data().nombre);
      })
      return{
        categorias
      }
    })
  },
    data(){
        return {
            form:{
            nombre:'',
            cantidad: '',
            precio: ''
            },
            guardando: false,
            imagenProduct: "",
            t: false
        }
    },
    
    methods: {
        guardarproducto(){
          
          this.guardando= true
          this.t = true
          let imagenRef = storage.child(this.imagenProduct.name)
          imagenRef.put(this.imagenProduct).then(async imagenRes => { 
           this.form.imagen = await imagenRes.ref.getDownloadURL()//se optiene la url de la imagen
           db.collection("productos").add(this.form).then(res => {
                this.$router.push({
                    path: "/productos"
                })
            })
          })//aqui se sube la imagen
        }
    }
}
</script>

