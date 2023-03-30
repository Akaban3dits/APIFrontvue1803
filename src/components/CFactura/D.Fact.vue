<template>
  <div class="app-content">
    <div class="app-content-header">
      <Router-Link :to="{path: '/FCrear'}"><button class="app-content-headerButton3">Añadir</button></Router-Link>
    </div>
    </div>
<div class="table">
    <div class="table-head">
      <h4 class="colorh3">Facturas</h4>
    </div>
    <div class="table-body">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>PkFactura</th>
              <th>R.Social</th>
              <th>Fecha</th>
              <th>RFC</th>
              <th>Cliente</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="fac in Factura" :key="fac.pkFactora">
              <td>{{ fac.pkFactora }}</td>
              <td>{{ fac.razonSocial}}</td>
              <td>{{ DateFormat(fac.fecha) }}</td>
              <td>{{ fac.rfc}}</td>
              <td>{{ Cliente.find(e => e.pkCliente == fac.fkCliente)?.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button type="button" v-on:click="borrarUsuario(fac.pkFactora)" class="app-content-headerButton2">
                    Eliminar</button>    &nbsp; &nbsp; 
                  <button type="button" v-on:click="editarUsuario(fac.pkFactora)" class="app-content-headerButton">
                    Editar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  components: {
  },
  data() {
    return {
      Factura: [],
      Cliente: []
    };
  },
  created: function () {
    this.consultarUsuario();
    this.consultarCliente();
  },
  methods: {
    consultarUsuario() {
      axios.get("https://localhost:7294/Factura").then((result) => {
        console.log(result.data);
        this.Factura = result.data.result;
      });
    },
    consultarCliente() {
      axios.get("https://localhost:7294/Cliente").then((result) => {
        console.log(result.data);
        this.Cliente = result.data.result;
      });
    },
    borrarUsuario(id) {
      var pregunta = window.confirm('Esta se seguro de eliminar este registro?');

      if (pregunta === true) {
        axios.delete("https://localhost:7294/Factura/" + id);
        window.location.href = "DFac";

      } else {

      }

    },
    editarUsuario(pkFactora){
      console.log(pkFactora);
      this.$router.push("/EFac/" + pkFactora)
    },

    DateFormat(fechaRegistro){
      let fecha = dayjs(fechaRegistro).format('DD/MM/YYYY  H:mm:ss a')
      return fecha
    }
  },
};
</script>