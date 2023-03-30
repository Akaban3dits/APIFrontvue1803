<template>
  <div class="app-content">
    <div class="app-content-header">
      <Router-Link :to="{path: '/UCrear'}"><button class="app-content-headerButton3">Añadir</button></Router-Link>
    </div>
    </div>
<div class="table">
    <div class="table-head">
      <h4 class="colorh3">Usuario</h4>
    </div>
    <div class="table-body">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>PkUsuario</th>
              <th>Usser</th>
              <th>Password</th>
              <th>Fecha de Registro</th>
              <th>Empleado</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in Usuario" :key="usuario.pkUsuario">
              <td>{{ usuario.pkUsuario }}</td>
              <td>{{ usuario.user}}</td>
              <td>{{ usuario.password }}</td>
              <td>{{ DateFormat(usuario.fechaRegistro ) }}</td>
              <td>{{ Empleado.find(e => e.pkEmpleado == usuario.fkEmpleado)?.nombre }}</td>
              <td>{{ Rol.find(e => e.pkRol == usuario.fkRol)?.nombre  }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button type="button" v-on:click="borrarUsuario(usuario.pkUsuario)" class="app-content-headerButton2">
                    Eliminar</button>    &nbsp; &nbsp; 
                  <button type="button" v-on:click="editarUsuario(usuario.pkUsuario)" class="app-content-headerButton">
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
      Usuario: [],
      Empleado: [],
      Rol: []
    };
  },
  created: function () {
    this.consultarUsuario();
    this.consultarEmpleado();
    this.consultarRol();
  },
  methods: {
    consultarUsuario() {
      axios.get("https://localhost:7294/Usuario").then((result) => {
        console.log(result.data);
        this.Usuario = result.data.result;
      });
    },
    consultarEmpleado() {
      axios.get("https://localhost:7294/Empleado").then((result) => {
        console.log(result.data);
        this.Empleado = result.data.result;
      });
    },
    consultarRol() {
      axios.get("https://localhost:7294/Rol").then((result) => {
        console.log(result.data);
        this.Rol = result.data.result;
      });
    },
    borrarUsuario(id) {
      var pregunta = window.confirm('Esta se seguro de eliminar este registro?');

      if (pregunta === true) {
        axios.delete("https://localhost:7294/Usuario/" + id);
        window.location.href = "DUsuario";

      } else {

      }

    },
    editarUsuario(pkUsuario){
      console.log(pkUsuario);
      this.$router.push("/EUsuario/" + pkUsuario)
    },

    DateFormat(fechaRegistro){
      let fecha = dayjs(fechaRegistro).format('DD/MM/YYYY  H:mm:ss a')
      return fecha
    }
  },
};
</script>