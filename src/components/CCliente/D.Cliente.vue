<template>
    <div class="app-content">
    <div class="app-content-header">
      <Router-Link :to="{path: '/CCrear'}"><button class="app-content-headerButton3">Añadir</button></Router-Link>
    </div>
    </div>
<div class="table">
  
    <div class="table-head">
      <h4 class="colorh3">Cliente</h4>
      </div>
    <div class="table-body">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>PkCliente</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Direccion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Clientes in Cliente" :key="Clientes.pkCliente">
              <td>{{ Clientes.pkCliente }}</td>
              <td>{{ Clientes.nombre }}</td>
              <td>{{ Clientes.apellidos }}</td>
              <td>{{ Clientes.telefono }}</td>
              <td>{{ Clientes.email }}</td>
              <td>{{ Clientes.direccion }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button type="button" v-on:click="borrarCliente(Clientes.pkCliente)" class="app-content-headerButton2">
                    Eliminar</button> &nbsp; &nbsp; 
                    <!-- <Router-Link :to="{name: 'ECliente', params:{id:Clientes.pkCliente}}"  class="app-content-headerButton3">Editar</Router-Link>  -->
                  <button type="button" v-on:click="editarCliente(Clientes.pkCliente)" class="app-content-headerButton">
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
export default {
  components: {
  },
  data() {
    return {
      Cliente: []
    };
  },
  created: function () {
    this.consultarCliente();
  },
  methods: {
    consultarCliente() {
      axios.get("https://localhost:7294/Cliente").then((result) => {
        console.log(result.data);
        this.Cliente = result.data.result;
      });
    },
    borrarCliente(id) {
      var pregunta = window.confirm('Esta se seguro de eliminar este registro?');

      if (pregunta === true) {
        axios.delete("https://localhost:7294/Cliente/" + id);
        window.location.href = "DCliente";

      } else {

      }

    },
    editarCliente(pkCliente){
      console.log(pkCliente);
      this.$router.push("/ECliente/" + pkCliente)
    },

  },
};
</script>