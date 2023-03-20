<template>
    <head>
    

  </head>
  <div class="sidebar">
      <a class="active" href="#">Inicio</a>
      <a href="#">Dashboard</a>
      <a href="#">Configuración</a>
    </div>
    <div class="table">
            <div class="table-head">
                <h3>Table</h3>
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
                                <th>Buttons</th>
                            </tr>
                        </thead>
                        <tbody>
              <tr v-for="Cliente in Cliente" :key="Cliente.PkCliente">
                <td>{{ Cliente.PkCliente }}</td>
                <td>{{ Cliente.Nombre }}</td>
                <td>{{ Cliente.Apellidos }}</td>
                <td>{{ Cliente.Telefono }}</td>
                <td>{{ Cliente.Email }}</td>
                <td>{{ Cliente.Direccion}}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="eliminar(Cliente.PkCliente)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
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
  data() {
    return {
      Cliente: [],
    };
  },
  created: function () {
    this.consultarCliente();
  },
  methods: {
    consultarCliente() {
      axios.get("https://localhost:7294/Cliente").then((result) => {
        console.log(result.data);
        this.Cliente = result.data;
      });
    },

    borrarCliente(PkCliente) {
      console.log(PkCliente);

      axios.delete("https://localhost:7294/Cliente/Eliminar/" + id);

      window.location.href = "Listar";
    },
  },
}
</script>