<template>
  <div class="signupFrm">
    <form action="" class="form" v-on:submit.prevent="formulario">
      <h1 class="title">Registro</h1>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" v-model="Factura.RazonSocial" id="us">
        <label for="" class="label">Razon Social</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" v-model="Factura.RFC" id="pass">
        <label for="" class="label">RFC</label>
      </div>

      <div class="inputContainer">
        <label for="" class="label1">Cliente</label>
        <select class="input" name="fkrol" id="fkrol" v-model="Factura.fkCliente">
          <option v-for="clie in Cliente" :value="clie.pkCliente" :key="clie.pkCliente">{{ clie.nombre
          }}</option>
        </select>
      </div>

      <div class="inputContainer" role="group" id="botonesopcion">
        |<button type="submit" class="submitBtn">Agregar</button>|
        |<router-link :to="{ path: '/DFac' }" class="submitBtn">Cancelar </router-link>|
      </div>
      <router-link :to="{ path: '/DFac' }" class="submitBtn" id="finaliza" style="display: none;"
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
      Factura: {},
      smg: "",
      Cliente: []
    };
  },
  created: function () {
    this.consultar();
  },
  methods: {
    formulario() {
      console.log(this.Factura);
      const tiempoTranscurrido = Date.now();
      const hoy = new Date(tiempoTranscurrido);
      var datosEnviar = {
        RazonSocial: this.Factura.RazonSocial,
        RFC: this.Factura.RFC,
        Fecha: hoy.toISOString(),
        fkCliente: this.Factura.fkCliente
      };

      axios.post("https://localhost:7294/Factura", datosEnviar).then((result) => {
        if (result.status == 200) {
          document.getElementById("alert").style.display = "block";
          document.getElementById('botonesopcion').style.display = "none";
          this.smg = "Se agrego correctamente";
          document.getElementById('finaliza').style.display = "block";
          console.log(result);
        }
      });
    },
    consultar(){
      axios.get("https://localhost:7294/Cliente").then((result) => {
        console.log(result.data);
        this.Cliente = result.data.result;
      });
    }
  },
};
</script>