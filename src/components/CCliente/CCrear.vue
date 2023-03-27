<template>
  <div class="signupFrm">
    <form action="" class="form" v-on:submit.prevent="formulario">
      <h1 class="title">Registro</h1>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" v-model="Cliente.nombre" id="nombre">
        <label for="" class="label">Nombre(s)</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" v-model="Cliente.apellidos" id="apellidos">
        <label for="" class="label">Apellido(s)</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" v-model="Cliente.telefono" id="telefono">
        <label for="" class="label">Telefono</label>
      </div>

      <div class="inputContainer">
        <input type="email" class="input" placeholder="a" v-model="Cliente.email" id="email">
        <label for="" class="label">Email</label>
      </div>
      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" v-model="Cliente.direccion" id="direccion">
        <label for="" class="label">Direccion</label>
      </div>
      <div class="inputContainer" role="group" id="botonesopcion">
        |<button type="submit" class="submitBtn">Agregar</button>|
        |<router-link :to="{ path: '/DCliente' }" class="submitBtn">Cancelar</router-link>|
      </div>
      <router-link :to="{ path: '/DCliente' }" class="submitBtn" id="finaliza"
        style="display: none;">Finalizar</router-link>

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
      Cliente: {},
      smg: ""
    };
  },

  methods: {
    formulario() {
      console.log(this.Cliente);

      var datosEnviar = {
        nombre: this.Cliente.nombre,
        apellidos: this.Cliente.apellidos,
        telefono: this.Cliente.telefono,
        email: this.Cliente.email,
        direccion: this.Cliente.direccion
      };

      axios.post("https://localhost:7294/Cliente", datosEnviar).then((result) => {
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