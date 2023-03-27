<template>
  <div class="app-content">
    <div class="app-content-header">
      <Router-Link :to="{path: '/ECrear'}"><button class="app-content-headerButton3">Añadir</button></Router-Link>
    </div>
    </div>
<div class="table">
    <div class="table-head">
      <h4 class="colorh3">Empleado</h4>
    </div>
    <div class="table-body">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>PkEmpleado</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Direccion</th>
              <th>Ciudad</th>
              <th>Puesto</th>
              <th>Departamento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="emp in Empleado" :key="emp.pkEmpleado">
              <td>{{ emp.pkEmpleado}}</td>
              <td>{{ emp.nombre}}</td>
              <td>{{ emp.apellidos }}</td>
              <td>{{ emp.direccion }}</td>
              <td>{{ emp.ciudad}}</td>
              <td>{{ emp.fkPuesto }}</td>
              <td>{{ emp.fkDepartamento }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button type="button" v-on:click="borrarUsuario(emp.pkEmpleado)" class="app-content-headerButton2">
                    Eliminar</button>    &nbsp; &nbsp; 
                  <button type="button" v-on:click="editarUsuario(emp.pkEmpleado)" class="app-content-headerButton">
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
      Empleado: []
    };
  },
  created: function () {
    this.consultarUsuario();
  },
  methods: {
    consultarUsuario() {
      axios.get("https://localhost:7294/Empleado").then((result) => {
        console.log(result.data);
        this.Empleado = result.data.result;
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
        axios.delete("https://localhost:7294/Empleado/" + id);
        window.location.href = "DEmp";

      } else {

      }

    },
    editarUsuario(pkEmpleado){
      console.log(pkEmpleado);
      this.$router.push("/EEmp/" + pkEmpleado)
    },

    DateFormat(fechaRegistro){
      let fecha = dayjs(fechaRegistro).format('DD/MM/YYYY  H:mm:ss a')
      return fecha
    }
  },
};
</script>