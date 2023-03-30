<template>
  <div class="signupFrm">
    <form action="" class="form" v-on:submit.prevent="formulario">
      <h1 class="title">Registro</h1>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" v-model="Usuarios.us" id="us">
        <label for="" class="label">Nombre de Usuario</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" v-model="Usuarios.pass" id="pass">
        <label for="" class="label">Password</label>
      </div>

      <div class="inputContainer">
        <label for="" class="label1">Empleados</label>
        <select class="input" name="fkempleado" id="fkempleado" v-model="Usuarios.fkEmpleado">
          <option v-for="emp in Empleado" :value="emp.pkEmpleado" :key="emp.pkEmpleado">{{ emp.nombre }}</option>
        </select>
      </div>
      <div class="inputContainer">
        <label for="" class="label1">Roles</label>
        <select class="input" name="fkrol" id="fkrol" v-model="Usuarios.fkRol">
          <option v-for="rol in Rol" :value="rol.pkRol" :key="rol.pkRol">{{ rol.nombre }}</option>
        </select>
      </div>
      <div class="inputContainer" role="group" id="botonesopcion">
        |<button type="submit" class="submitBtn">Agregar</button>|
        |<router-link :to="{ path: '/DUsuario' }" class="submitBtn">Cancelar </router-link>|
      </div>
      <router-link :to="{ path: '/DUsuario' }" class="submitBtn" id="finaliza" style="display: none;"
        text-decoration="none">Finalizar</router-link>

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
      Usuarios: {},
      smg: "",
      Empleado: [],
      Rol: []
    };
  },
  created: function () {
    this.consultar();
  },

  methods: {
    formulario() {
      console.log(this.Usuarios);
      const tiempoTranscurrido = Date.now();
      const hoy = new Date(tiempoTranscurrido);
      var datosEnviar = {
        User: this.Usuarios.us,
        Password: this.Usuarios.pass,
        FechaRegistro: hoy.toISOString(),
        FkEmpleado: this.Usuarios.fkEmpleado,
        FkRol: this.Usuarios.fkRol
      };

      axios.post("https://localhost:7294/Usuario", datosEnviar).then((result) => {
        if (result.status == 200) {
          document.getElementById("alert").style.display = "block";
          document.getElementById('botonesopcion').style.display = "none";
          this.smg = "Se agrego correctamente";
          document.getElementById('finaliza').style.display = "block";
          console.log(result);
        }
      });

    },
    consultar() {
      axios.get("https://localhost:7294/Rol").then((result) => {
        console.log(result.data);
        this.Rol = result.data.result;
      });
      axios.get("https://localhost:7294/Empleado").then((result) => {
        console.log(result.data);
        this.Empleado = result.data.result;
      });


    }
  },
};
</script>