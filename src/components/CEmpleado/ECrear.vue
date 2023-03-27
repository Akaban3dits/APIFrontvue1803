<template>
  <div class="signupFrm">
    <form action="" class="form" v-on:submit.prevent="formulario">
      <h1 class="title">Registro</h1>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" v-model="Empleado.nombre" id="us">
        <label for="" class="label">Nombre(s)</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" v-model="Empleado.apellidos" id="pass">
        <label for="" class="label">Apellido(s)</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" v-model="Empleado.direccion" id="emp">
        <label for="" class="label">Direccion</label>
      </div>
      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" v-model="Empleado.ciudad" id="rol">
        <label for="" class="label">Ciudad</label>
      </div>
      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" v-model="Empleado.fkpuesto" id="rol">
        <label for="" class="label">Puesto</label>
      </div>
      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" v-model="Empleado.fkdepartamento" id="rol">
        <label for="" class="label">Empleado</label>
      </div>
      <div class="inputContainer" role="group" id="botonesopcion">
        |<button type="submit" class="submitBtn">Agregar</button>|
        |<router-link :to="{ path: '/DEmp' }" class="submitBtn" >Cancelar </router-link>|
      </div>
      <router-link :to="{ path: '/DEmp' }" class="submitBtn" id="finaliza"
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
      Empleado: {},
      smg: ""
    };
  },

  methods: {
    formulario() {
      console.log(this.Empleado);
      var datosEnviar = {
        nombre: this.Empleado.nombre,
        apellidos: this.Empleado.apellidos,
        direccion: this.Empleado.direccion,
        ciudad: this.Empleado.ciudad,
        fkpuesto: this.Empleado.fkpuesto,
        fkdepartamento: this.Empleado.fkdepartamento
      };

      axios.post("https://localhost:7294/Empleado", datosEnviar).then((result) => {
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