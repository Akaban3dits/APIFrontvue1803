<template>
  <div class="signupFrm">
    <form action="" class="form" v-on:submit.prevent="formulario">
      <h1 class="title">Registro</h1>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" v-model="Rol.nombre" id="name">
        <label for="" class="label">Nombre del Rol</label>
      </div>
      <div class="inputContainer" role="group" id="botonesopcion">
        |<button type="submit" class="submitBtn">Agregar</button>|
        |<router-link :to="{ path: '/DRol' }" class="submitBtn" >Cancelar </router-link>|
      </div>
      <router-link :to="{ path: '/DRol' }" class="submitBtn" id="finaliza"
        style="display: none;" text-decoration="none">Finalizar</router-link>

      <div id="alert" style="display:none;" class="alert alert-success" role="alert">
        {{ smg }}
      </div>
    </form>
  </div>
</template>
  
<script>
import axios from "axios";
export default {
  data() {
    return {
      Rol: {},
      smg: ""
    };
  },

  methods: {
    formulario() {
      console.log(this.Rol);
      var datosEnviar = {
        nombre: this.Rol.nombre
      };

      axios.post("https://localhost:7294/Rol", datosEnviar).then((result) => {
        if (result.status == 200) {
          document.getElementById("alert").style.display = "block";
          document.getElementById('botonesopcion').style.display = "none";
          this.smg = "Se agrego correctamente";
          document.getElementById('finaliza').style.display = "block";
          console.log(result);
        }
      });
    },
  },
};
</script>