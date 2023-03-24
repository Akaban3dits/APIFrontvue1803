<template>
  <div class="app-content">
    <div class="app-content-header">
      <button class="app-content-headerButton3">Añadir</button>
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
              <td>{{ usuario.fechaRegistro }}</td>
              <td>{{ usuario.fkEmpleado}}</td>
              <td>{{ usuario.fkRol }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button type="button" v-on:click="borrarUsuario(usuario.pkUsuario)" class="app-content-headerButton2">
                    Eliminar</button>    &nbsp; &nbsp; 
                  <button type="button" v-on:click="editarCliente(usuario.pkUsuario)" class="app-content-headerButton">
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
      Usuario: []
    };
  },
  created: function () {
    this.consultarUsuario();
  },
  methods: {
    consultarUsuario() {
      axios.get("https://localhost:7294/Usuario").then((result) => {
        console.log(result.data);
        this.Usuario = result.data.result;
        // console.log(this.Usuarios[1].fkEmpleado);
        //   for (let i = 0; i < this.Usuarios.length; i++) {
        //     this.Empleado.push(this.Usuarios[i].fkEmpleado);
        //   }
        //   if (this.Empleado.length != 0) {
        //     for (let i = 0; i < this.Empleado.length; i++) {
        //       axios.get("https://localhost:7051/Empleado?id=" + this.Empleado[i]).then((result) => {
        //         this.nombresempleados = result.data.result;
        //         console.log(result.data.result.apellidos);
        //       });
        //     }
        //   }
        //   else {
        //     console.log("Array empleados no lleno");
        //   }
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
    editarCliente() {
      window.location.href = "Crear";

    },
  },
};
</script>