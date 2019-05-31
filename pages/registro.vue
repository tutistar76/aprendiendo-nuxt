<template>
    <form name="registro" @submit.prevent="guardarproducto">
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12" md="4" offset-md="4">
          
            <div class="form-group">
              
              
              <label for="nombre">Nombre</label>
              <input
                type="text"
                required 
                v-model="form.nombre"
                class="form-control"
                name="No"

                placeholder="Ingrese prmbre usuario"
              >
              <label for="correo">correo</label>
              <input
                type="number"
                required
                v-model="form.precio"
                class="form-control"
                name="Precio"
                placeholder="Ingrese contraseña"
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
