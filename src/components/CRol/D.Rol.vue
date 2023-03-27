<template>
  <div class="app-content">
    <div class="app-content-header">
      <Router-Link :to="{path: '/RCrear'}"><button class="app-content-headerButton3">Añadir</button></Router-Link>
    </div>
    </div>
<div class="table">
    <div class="table-head">
      <h4 class="colorh3">Roles</h4>
    </div>
    <div class="table-body">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rol in Rol" :key="rol.pkRol">
              <td>{{ rol.pkRol }}</td>
              <td>{{ rol.nombre}}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button type="button" v-on:click="borrarrol(rol.pkRol)" class="app-content-headerButton2">
                    Eliminar</button>    &nbsp; &nbsp; 
                  <button type="button" v-on:click="editarrol(rol.pkRol)" class="app-content-headerButton">
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
      Rol: []
    };
  },
  created: function () {
    this.consultarRol();
  },
  methods: {
    consultarRol() {
      axios.get("https://localhost:7294/Rol").then((result) => {
        console.log(result.data);
        this.Rol = result.data.result;
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
    borrarrol(id) {
      var pregunta = window.confirm('Esta se seguro de eliminar este registro?');

      if (pregunta === true) {
        axios.delete("https://localhost:7294/Rol/" + id);
        window.location.href = "DRol";

      } else {

      }

    },
    editarrol(pkRol){
      console.log(pkRol);
      this.$router.push("/ERol/" + pkRol)
    }
  },
};
</script>