<template>
  <!--<di+++++v>
        <a href="/">Inicio</a>
        <a href="/contacto">Contacto</a>
  </div>-->

  <b-navbar variant="danger" type="dark" toggleable="lg">
    <b-navbar-brand href="/">BootstrapVue</b-navbar-brand>

    <b-navbar-toggle target="menu"></b-navbar-toggle>

    <b-collapse is-nav id="menu">
      <b-navbar-nav>
        <b-nav-item href="/contacto">Contacto</b-nav-item>

        <b-nav-item href="/productos">Productos</b-nav-item>

        <b-nav-item href="/categorias">Categorias</b-nav-item>

        <b-nav-item href=" /carrito">carrito de compras</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-button size="sm" class="my-2 my-sm-0" v-b-modal.Login v-if="!user">Iniciar Sesion</b-button>
          
          <b-button variant="danger" size="sm" class="my-2 my-sm-0" v-b-modal.registro v-if="!user">Registrarse</b-button>
        <b-dropdown v-if="user" :text="user.displayName">
          <b-dropdown-item @click="cerrarsesion ">cerrar sesion</b-dropdown-item>
        </b-dropdown>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
<b-form @submit.prevent="registro">
    <b-modal id="registro" ref="registro" centered title="Registro" ok-title="Enviar">
      
        <b-form-group id="label_user" label="Usuario" label-for="usuario">
          <b-form-input id="user" type="text" v-model="formRes.name" required placeholder="Escribe tu nombre de Usuario"></b-form-input>
        </b-form-group>

        <b-form-group
          id="label_email"
          label="Correo Electronico"
          label-for="email"
          description="Nunca compartiremos su correo electrónico con nadie más."
        >
          <b-form-input
            id="email"
            type="email" 
            v-model="formRes.email"
            required
            placeholder="Ingrese su Correo Electronico"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lable_pass" label="Contraseña" label-for="contrasena">
          <b-form-input id="pass" type="password" v-model="formRes.pass" required placeholder="Ingrese una contraseña"></b-form-input>
        </b-form-group>
      
      <div slot="modal-footer">
        <b-button type="submit" variant="primary">Enviar</b-button>
        <b-button type="reset" variant="danger">Cancelar</b-button>
      </div>
    </b-modal>
</b-form>
<b-form @submit.prevent="iniciarsesion">
    <b-modal id="Login" ref="Login" centered title="Iniciar sesion">
      
        <b-form-group id="label_email" label="Correo Electronico" label-for="email">
          <b-form-input
            id="email"
            type="email"
            required
            v-model="formIni.email"
            placeholder="Ingrese su Correo Electronico"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lable_pass" label="Contraseña" label-for="contrasena">
          <b-form-input id="pass" type="password" required v-model="formIni.pass" placeholder="Ingrese una contraseña"></b-form-input>
        </b-form-group>
      
      <div slot="modal-footer">
        <b-button type="submit" variant="primary">Enviar</b-button>
        <b-button type="reset" variant="danger">Cancelar</b-button>
      </div>
    </b-modal>
    </b-form>
  </b-navbar>
</template>
<script>
import { auth } from'../services/firebase'
export default{
    data(){
        return{
            formRes: {}, 
            formIni: {},
            user: false
        }
    },
    created(){
     auth.onAuthStateChanged(user => {
          this.user = user
     })
    },

    methods: {
        registro(){
            auth.createUserWithEmailAndPassword(this.formRes.email, this.formRes.pass).then(res => {
               // alert("registro exitoso")
               res.user.updateProfile({
                 displayName: this.formRes.name
               }).then(resUpdate => {
                 this.$router.push({
                 path: "/"
               })

               
               });
                }).catch(error => {
    
            alert("ha ocurrido un error" + error.message)
        })
        
    },
    
      cerrarsesion(){
        auth.signOut()
      },
iniciarsesion(){
auth.signInWithEmailAndPassword(
this.formIni.email, this.formIni.pass).then(res => {
  this.$router.push({ path: "/"});
}).catch(err => {
  alert("ha ocurrido un error " + err.message)
})
}
    
    }

}
</script>