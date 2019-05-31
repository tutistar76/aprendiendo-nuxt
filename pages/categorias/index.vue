<template>
  <div class="row mt-3">
    <div class="col-sm-6">
      <h2>vehiculos</h2>
    </div>
    <div class="col-sm-6">
      <b-button variant="primary" href="/categorias/crear">
      nuevo
      </b-button>
    </div>
    
    <div class="row mt-2">
     <!-- <div class="COL-MS-12">-->
        <b-col cols="12" md="12" offset-md="10">
        <b-table id="categorias"  responsive striped hover :fields="fields" :items="categorias" :current-page="currentPage" :per-page="perPage">
        
        <template slot="acciones" slot-scope="data">
          
          <b-button variant="success">
            Editar
          </b-button>
          <b-button variant="danger" type="buton" @click="eliminarcategorias(data.item.id)"> <!--en este se combierte en boton-->
            Eliminar
          </b-button>

        </template>
        </b-table>

          <b-pagination   
            v-model="currentPage"
             :total-rows="rows"
              :per-page="perPage"
               aria-controls="categorias"
    ></b-pagination>
</b-col>

      </div>
    </div>
    
</template>

<script>
import { db } from '../../services/firebase';
export default {
  asyncData(){

   return db.collection("categorias").get().then(categoriasSnap => {
      let categorias = []

      categoriasSnap.forEach(value => { //aqui se crea la coneccion para cerar el boton eliminar
        categorias.push({id:value.id,
        ...value.data()});
      });
      return{
        categorias,
        currentPage: 1,//donde inicia la paginacion
        perPage: 4, //cuantos registros se va a mostrar


      };

    });
  },
  data(){

    return{
      fields: ['nombre','acciones',{ isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },]
    }
    
  },
  computed: {
      rows(){
        return this.categorias.length
      }

    },
    methods: {
      eliminarcategorias(id,index){ //aqui recibe el index-->
        
        db.collection("categorias").doc(id).delete().then(()=>{
          let index
          this.categorias.map((value,key)=>{
            if(value.id==id) index = key
          })
          this.categorias.splice(index,1)
        })//se llama a la coleccion productos y se borra

      }
    }

};
</script>