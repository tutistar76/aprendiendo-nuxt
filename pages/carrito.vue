<template>
<div>
<div class="row mt-4">
    <div class="col-sm-4">
        <h2>carrito de compras</h2>

    </div>
    </div>

    <div class="row mt-4" v-for="(value,key) in carrito" :key="key">
    <div class="col-sm-4">
        <h2>{{value.producto.nombre + " cantidad " + value.cantidad}}</h2>

    </div>
    </div>
    </div>
</template>

<script>
import { db } from '../services/firebase'
export default {
   data(){
       return {
           carrito: []
       }
   },

   created(){
       this.traercarrito()
   },
   methods: {
    traercarrito(){
        return db.collection('carrito')
        .onSnapshot((carritoSnap) => {
            this.carrito = []
            carritoSnap.forEach(async (valuecarrito) => {
                let producto= await valuecarrito.data().producto.get()

                producto = producto.data()
               this.carrito.push({
                    id: valuecarrito.id,
                    cantidad: valuecarrito.data().cantidad,
                    valor: valuecarrito.data().valor,
                    producto
                })
            })
           
           
        });
    }
   }
}
</script>


